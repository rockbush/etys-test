const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const fields = [
  "price",
  "shippingCharged",
  "productCost",
  "shippingCost",
  "packagingCost",
  "adsCost",
  "discount",
  "offsiteRate",
];

function value(id) {
  return Number(document.getElementById(id).value) || 0;
}

function escapeHTML(text) {
  return text.replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return map[char];
  });
}

function calculateProfit() {
  const price = value("price");
  const shippingCharged = value("shippingCharged");
  const productCost = value("productCost");
  const shippingCost = value("shippingCost");
  const packagingCost = value("packagingCost");
  const adsCost = value("adsCost");
  const discountRate = value("discount") / 100;
  const offsiteRate = value("offsiteRate");

  const discountedPrice = price * (1 - discountRate);
  const revenue = discountedPrice + shippingCharged;
  const listingFee = 0.2;
  const transactionFee = revenue * 0.065;
  const offsiteFee = revenue * offsiteRate;
  const etsyFees = listingFee + transactionFee + offsiteFee;
  const paymentFee = revenue * 0.03 + 0.25;
  const totalCosts = productCost + shippingCost + packagingCost + adsCost;
  const netProfit = revenue - etsyFees - paymentFee - totalCosts;
  const margin = revenue > 0 ? (netProfit / revenue) * 100 : 0;

  const fixedCosts = totalCosts + listingFee + 0.25;
  const variableRate = 0.065 + offsiteRate + 0.03;
  const breakEvenPrice = fixedCosts / Math.max(0.01, 1 - variableRate);
  const target40 = fixedCosts / Math.max(0.01, 1 - variableRate - 0.4);

  document.getElementById("netProfit").textContent = money.format(netProfit);
  document.getElementById("totalRevenue").textContent = money.format(revenue);
  document.getElementById("etsyFees").textContent = money.format(etsyFees);
  document.getElementById("paymentFee").textContent = money.format(paymentFee);
  document.getElementById("totalCosts").textContent = money.format(totalCosts);
  document.getElementById("profitMargin").textContent = `${margin.toFixed(1)}%`;
  document.getElementById("breakEven").textContent = money.format(breakEvenPrice);

  document.getElementById("heroProfit").textContent = money.format(netProfit);
  document.getElementById("heroMargin").textContent = `${margin.toFixed(1)}%`;
  document.getElementById("heroBreakEven").textContent = money.format(breakEvenPrice);

  const message =
    margin >= 35
      ? `Healthy margin. To keep about 40% profit after fees, test a price near ${money.format(target40)}.`
      : `Margin is tight. Review product cost, ads, discount, or price. A 40% target needs about ${money.format(target40)}.`;

  document.getElementById("recommendation").textContent = message;
}

function generateListing() {
  const product = document.getElementById("productType").value.trim() || "handmade product";
  const keywords = document.getElementById("keywords").value.trim() || "gift, handmade, custom";
  const keywordList = keywords
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  const title = `${product} | ${keywordList.slice(0, 3).join(" | ")} | Personalized Etsy Gift`;
  const tags = [
    ...keywordList,
    "etsy seller",
    "personalized gift",
    "handmade style",
    "small business",
    "birthday present",
    "custom order",
    "unique gift",
    "gift for her",
    "gift for him",
    "made to order",
  ].slice(0, 13);

  const description = `Make every order feel personal with this ${product.toLowerCase()}. It is designed for buyers searching for ${keywordList.join(", ")} and works well for birthdays, holidays, thank-you gifts, and everyday keepsakes. Add your customization details at checkout and review the preview notes before production.`;

  document.getElementById("listingOutput").innerHTML = `
    <div class="generated-block">
      <strong>SEO Title</strong>
      <p>${escapeHTML(title)}</p>
    </div>
    <div class="generated-block">
      <strong>13 Tags</strong>
      <p>${escapeHTML(tags.join(", "))}</p>
    </div>
    <div class="generated-block">
      <strong>Description</strong>
      <p>${escapeHTML(description)}</p>
    </div>
    <div class="generated-block">
      <strong>Photo Alt Text</strong>
      <p>${escapeHTML(product)} shown as a personalized Etsy gift with clear product details.</p>
    </div>
  `;
}

async function handleWaitlist(event) {
  event.preventDefault();

  const form = event.target;
  const email = document.getElementById("waitlistEmail").value.trim();
  const shopType = document.getElementById("shopType").value;
  const monthlySales = document.getElementById("monthlySales").value || "Not provided";
  const wantedFeature = document.getElementById("wantedFeature").value;
  const status = document.getElementById("waitlistStatus");
  const button = form.querySelector("button[type='submit']");

  if (!email || !shopType) {
    status.textContent = "Add your email and shop type to join the early list.";
    return;
  }

  const lead = {
    email,
    shopType,
    monthlySales,
    wantedFeature,
    submittedAt: new Date().toISOString(),
  };

  let existingLeads = [];
  try {
    existingLeads = JSON.parse(localStorage.getItem("sellermarginWaitlist") || "[]");
  } catch (error) {
    existingLeads = [];
  }
  if (!Array.isArray(existingLeads)) {
    existingLeads = [];
  }
  const nextLeads = existingLeads.filter((item) => {
    const savedEmail = typeof item.email === "string" ? item.email.toLowerCase() : "";
    return savedEmail !== email.toLowerCase();
  });
  nextLeads.push(lead);
  localStorage.setItem("sellermarginWaitlist", JSON.stringify(nextLeads));

  status.textContent = "Submitting...";
  button.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(form),
    });

    if (!response.ok) {
      throw new Error("Form service returned an error.");
    }

    status.textContent = "You're on the early access list. Check your inbox if this is the first test submission.";
    form.reset();
  } catch (error) {
    status.textContent = "Saved locally, but email delivery needs another try. Please submit again in a minute.";
  } finally {
    button.disabled = false;
  }
}

fields.forEach((id) => {
  document.getElementById(id).addEventListener("input", calculateProfit);
});

document.getElementById("generateListing").addEventListener("click", generateListing);
document.getElementById("waitlistForm").addEventListener("submit", handleWaitlist);

calculateProfit();
generateListing();
