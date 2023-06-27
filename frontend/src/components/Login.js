import React from "react";

export const Login = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div>
        {/* <div
      class="flex flex-wrap content-center justify-center rounded-r-md ml-5 "
      style={{ width: 28 + "rem", height: 36 + "rem" }}
    >
      <img
        class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
        src="https://i.imgur.com/9l1A4OS.jpeg"
      />
    </div> */}
        image
      </div>

      <div className="container mt-10 md:mt-32 ">
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-5/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="Enter your Email"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-5/6 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="Create Password"
              />
            </div>
          </div>

          <div class="mb-3 grid grid-cols-2 gap-4">
            <div>
              <input id="remember" type="checkbox" class="mr-1 accent-main" />
              <label for="remember" class="mr-auto text-xs font-semibold">
                Remember for 30 days
              </label>
            </div>
            <div className="container ml-7">
              <a href="#" class="text-sm font-semibold">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="pb-3">
            <button className="w-full md:w-5/6 bg-main hover:bg-second text-white font-bold py-1 px-4 rounded-full">
              Sign Up
            </button>
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">or Login using</p>
          <div class="mb-3">
            <button class="flex flex-wrap justify-center w-full md:w-5/6 border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
              <img
                class="w-5 mr-2"
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
              />
              Google
            </button>
          </div>
          <div class="text-center">
            <span class="text-xs text-gray-400 font-semibold">New User?</span>
            <a href="#" class="text-xs font-semibold text-main">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
