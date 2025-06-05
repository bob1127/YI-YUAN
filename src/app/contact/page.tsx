"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import "./about.css";
import { Form, Input, Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function About() {
  return (
    <ReactLenis root>
      <section className="pt-[10vh] px-4 py-20 md:px-12 lg:px-20 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start min-h-[600px]">
          {/* 左側：表單（垂直置中） */}
          <div className="w-full px-10  max-w-3xl mx-auto  md:mx-0 h-full flex items-start">
            <div className="w-full  ">
              <div className="mb-4">
                <span className="text-sm tracking-widest text-gray-600">
                  Form
                </span>
                <h3 className="text-xl font-bold">聯絡表單</h3>
              </div>
              <Form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  let data = Object.fromEntries(new FormData(e.currentTarget));
                  console.log(data);
                }}
              >
                <Input isRequired label="姓名" name="username" type="text" />
                <Input isRequired label="聯絡電話" name="phone" type="tel" />
                <Input label="Email" name="email" type="email" />
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-gray-800">
                    您對哪個建案有興趣
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        id: "project1",
                        label: "誠境二期",
                        image:
                          "/images/烏日區五張犁西段474地號(誠境5)-完工實景照片10-1090219-S.jpg",
                      },
                      {
                        id: "project2",
                        label: "誠境一期",
                        image:
                          "/images/烏日區五張犁西段474地號(誠境5)-完工實景照片03-1090219.JPG",
                      },
                    ].map((project) => (
                      <label
                        key={project.id}
                        className="relative cursor-pointer group transition-transform hover:scale-[1.02]"
                      >
                        <input
                          type="radio"
                          name="project"
                          value={project.label}
                          className="hidden peer"
                          required
                        />
                        <div className="rounded-xl border-2 border-gray-300 overflow-hidden shadow-sm group-hover:shadow-md peer-checked:border-black peer-checked:shadow-lg transition-all duration-200">
                          <img
                            src={project.image}
                            alt={project.label}
                            className="w-full h-44 object-cover"
                          />
                          <div className="p-4 text-center text-base font-medium text-gray-800 bg-white">
                            {project.label}
                          </div>
                        </div>

                        {/* 選中狀態的勾勾角標（可選） */}
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-white bg-black opacity-0 peer-checked:opacity-100 transition"></div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-5 w-full">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-800"
                  >
                    諮詢內容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-white border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <Button color="primary" type="submit">
                    送出
                  </Button>
                  <Button type="reset" variant="flat">
                    清除
                  </Button>
                </div>
              </Form>
            </div>
          </div>

          {/* 右側：Facebook 與地圖上下排列 */}
          <div className="flex flex-col px-4 gap-12">
            {/* 地圖區塊 */}
            {/* 地圖區塊 */}
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-sm tracking-widest text-gray-600">
                  Location
                </span>
                <h3 className="text-xl font-bold">Map</h3>
              </div>
              <div className="w-full overflow-hidden rounded-lg max-h-[550px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29131.79636988095!2d120.64383669972379!3d24.11996731884885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693c55c0686be1%3A0xc3a3cec1c5df6a18!2zNDAy5Y-w5Lit5biC5Y2X5Y2A!5e0!3m2!1szh-TW!2stw!4v1743684644979!5m2!1szh-TW!2stw"
                  className="w-full h-[540px] border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  <b>YI-YUAN</b>
                </p>
                <p>宜園建設</p>
              </div>
              <div className="text-right">
                <span className="border-b border-black text-sm tracking-widest">
                  About Yi Yuan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
