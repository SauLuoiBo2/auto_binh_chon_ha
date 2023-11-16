async function reddenPage() {
  console.log("start");
  return;
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  try {
    // click nav to display list user
    document
      .getElementsByClassName(
        "categories-sticky-nav z-20 gap-1 flex flex-col lg:flex-row h-96 lg:h-64"
      )[0]
      .firstElementChild.click();
    console.log("cliick 1");
    await timeout(2000);
    // click to select user

    document
      .getElementsByClassName(
        "grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 py-6 lg:py-12"
      )[0]
      .lastElementChild.click();
    await timeout(2000);
    // click  to binh chon
    console.log("cliick 2");

    document
      .getElementsByClassName(
        "inline-flex items-center px-5 py-1.5 sm:px-6 sm:py-2 text-sm bg-primary-gradient border border-transparent rounded-full font-semibold text-center justify-center items-center  text-slate-800 !text-2xl tracking-wide !px-8 !py-4 uppercase leading-none"
      )[0]
      .click();

    await timeout(10000);
    console.log("cliick 3");
    document
      .getElementsByClassName(
        "inline-flex items-center px-5 py-1.5 sm:px-6 sm:py-2 text-sm bg-primary-gradient border border-transparent rounded-full font-semibold text-center justify-center items-center  text-slate-800 !text-2xl tracking-wide !px-8 !py-4 uppercase leading-none"
      )[0]
      .click();
    location.replace(`https://teachersday.izone.edu.vn/`);
  } catch (error) {
    console.error(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage,
    });
  }
});
