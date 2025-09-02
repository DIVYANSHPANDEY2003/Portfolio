import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/bmdkxlea", userInfo);
      toast.success("Your message has been sent successfully!");
      reset(); // Clear form after successful submission
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-gray-100 py-10 rounded-lg shadow-lg px-6 md:px-20">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-5">
          Contact Me
        </h1>
        <p className="text-lg text-gray-700 text-center leading-relaxed mb-10">
          Please fill out the form below to reach out to me. I will get back to you soon!
        </p>

        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-full max-w-md px-8 py-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Send Your Message
            </h2>

            {/* Full Name */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                {...register("name", { required: "Full Name is required" })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          toast.success("Your message has been sent successfully!");
          reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-gray-100 py-10 rounded-lg shadow-lg px-6 md:px-20">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-5">
          Contact Me
        </h1>
        <p className="text-lg text-gray-700 text-center leading-relaxed mb-10">
          Please fill out the form below to reach out to me. I will get back to you soon!
        </p>

        <div className="flex flex-col items-center justify-center">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-full max-w-md px-8 py-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Send Your Message
            </h2>

            {/* Full Name */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                {...register("user_name", { required: "Full Name is required" })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.user_name && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.user_name.message}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                {...register("user_email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.user_email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.user_email.message}
                </span>
              )}
            </div>
            {/* Subject */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                {...register("user_subject", { required: "Subject is required" })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Please Enter your subject"
              />
              {errors.subject && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
