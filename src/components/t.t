                <form action="" className="flex flex-col space-y-3">
                  <label htmlFor="name" className="font-bold text-lg">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
                  />

                  <label htmlFor="email" className="font-bold text-lg">Email Address</label>
                  <input type="text" id="email" name="email" placeholder="Your Email" required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
                  />

                  <label htmlFor="contact" className="font-bold text-lg">Contact Number</label>
                  <input type="text" id="contact" name="contact" placeholder="Your Contact Number" required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
                  />

                  <label htmlFor="message" className="font-bold text-lg">Message</label>
                  <textarea name="message" id="message" cols="3" rows="5"
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
                  ></textarea>

                  <button type="submit"
                    className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                  >
                    Submit
                  </button>
                </form>