<!-- pop-up responsive -->

<!-- Pop-up Section (initially hidden) -->
<div id="popup" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 hidden">
  <div class="bg-white rounded-3xl overflow-hidden shadow-xl transform transition-all w-40 h-96 sm:w-full sm:max-w-sm md:max-w-lg lg:max-w-3xl p-4 sm:p-6 md:p-8 lg:p-12">
    <!-- Close Button -->
    <button id="closePopup" class="absolute top-0 right-0 mt-2 mr-2 sm:mt-4 sm:mr-4 primary-text primary-hover">
      &times;
    </button>

    <!-- Content of the Pop-up -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-2 h-full">
      <div class="p-2 sm:p-4 h-full flex flex-col justify-between">
        <h2 class="text-base sm:text-lg md:text-2xl font-bold pb-2 sm:pb-4 md:pb-6">Contact</h2>
        <img src="images/benefit-removebg-preview.png" alt="Contact Image" class="w-full h-20 sm:h-40 md:h-auto" />
      </div>
      <div class="p-2 sm:p-4 primary-color rounded-3xl text-white h-full flex flex-col justify-between">
        <form class="h-full flex flex-col justify-between">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-2 sm:mb-4">
            <input class="bg-transparent border-b-2 border-white py-1 sm:py-2 px-2 sm:px-4 focus:outline-none placeholder-white"
              type="text" placeholder="First Name" />
            <input class="bg-transparent border-b-2 border-white py-1 sm:py-2 px-2 sm:px-4 focus:outline-none placeholder-white"
              type="text" placeholder="Last Name" />
          </div>
          <input
            class="bg-transparent border-b-2 border-white py-1 sm:py-2 px-2 sm:px-4 w-full mb-2 sm:mb-4 focus:outline-none placeholder-white"
            type="email" placeholder="Email" />
          <input
            class="bg-transparent border-b-2 border-white py-1 sm:py-2 px-2 sm:px-4 w-full mb-2 sm:mb-4 focus:outline-none placeholder-white"
            type="tel" placeholder="Phone" />
          <textarea
            class="bg-transparent border-b-2 border-white py-1 sm:py-2 px-2 sm:px-4 w-full mb-2 sm:mb-4 focus:outline-none placeholder-white"
            placeholder="Your Message"></textarea>
          <button type="submit"
            class="w-full bg-white primary-text hover:bg-black hover:text-white py-1 sm:py-2 px-4 rounded-full text-sm sm:text-base">SUBMIT</button>
        </form>
      </div>
    </section>
  </div>
</div>