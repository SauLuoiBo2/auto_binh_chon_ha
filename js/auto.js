async function reddenPage() {
  console.log("start");

  console.log(window.location.host);
  console.log(window.location.pathname);

  const url = window.location.host;

  const pathnameU = window.location.pathname;

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const homeUrl = "teachersday.izone.edu.vn";
  const bxhUrl = "/bang-xep-hang";

  if (pathnameU === bxhUrl) {
    await timeout(2000);

    location.replace(`https://teachersday.izone.edu.vn/`);
  }

  if (url === homeUrl) {
    try {
      var min = 60,
        max = 150;
      var randomTime = Math.floor(Math.random() * (max - min + 1) + min) * 1000; //Generate Random number between 5 - 10

      // click nav to display list user
      await timeout(randomTime);
      console.log("cliick 0");

      document
        .getElementsByClassName(
          "categories-sticky-nav z-20 gap-1 flex flex-col lg:flex-row h-96 lg:h-64"
        )[0]
        .firstElementChild.click();
      console.log("cliick 1 chon user");
      await timeout(2000);
      // click to select user

      const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

      for (let index = 0; index < data.length; index++) {
        const textCheck = document.getElementsByClassName(
          "text-primary py-3 text-center font-light lg:text-xl cursor-pointer"
        )[index].innerHTML;

        if (textCheck === "Nguyễn Hoàng Hà") {
          console.log(textCheck);
          console.log("cliick chon Nguyễn Hoàng Hà");

          document
            .getElementsByClassName(
              "text-primary py-3 text-center font-light lg:text-xl cursor-pointer"
            )
            [index].click();
          break;
        }
      }

      // const textCheck = document.getElementsByClassName(
      //   "text-primary py-3 text-center font-light lg:text-xl cursor-pointer"
      // )[2].innerHTML;

      // console.log(textCheck);

      // document
      //   .getElementsByClassName(
      //     "grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 py-6 lg:py-12"
      //   )[0]
      //   .lastElementChild.click();
      await timeout(2000);
      // click  to binh chon
      console.log("cliick 2 binh chon");

      document
        .getElementsByClassName(
          "inline-flex items-center px-5 py-1.5 sm:px-6 sm:py-2 text-sm bg-primary-gradient border border-transparent rounded-full font-semibold text-center justify-center items-center  text-slate-800 !text-2xl tracking-wide !px-8 !py-4 uppercase leading-none"
        )[0]
        .click();

      await timeout(60000);
      console.log("cliick 3 binh chon lan 2");

      document
        .getElementsByClassName(
          "inline-flex items-center px-5 py-1.5 sm:px-6 sm:py-2 text-sm bg-primary-gradient border border-transparent rounded-full font-semibold text-center justify-center items-center  text-slate-800 !text-2xl tracking-wide !px-8 !py-4 uppercase leading-none"
        )[0]
        .click();
      //   await timeout(60000);
      //   console.log("cliick 3 ve trang chu");
      //   document
      //     .getElementsByClassName(
      //       "inline-flex items-center px-5 py-1.5 sm:px-6 sm:py-2 text-sm bg-primary-gradient border border-transparent rounded-full font-semibold text-center justify-center items-center  text-slate-800 !text-2xl tracking-wide !px-8 !py-4 uppercase leading-none"
      //     )[0]
      //     .click();
      //   location.replace(`https://teachersday.izone.edu.vn/`);
    } catch (error) {
      console.error(error);
      location.replace(`https://teachersday.izone.edu.vn/`);
    }
  }
}

reddenPage();
