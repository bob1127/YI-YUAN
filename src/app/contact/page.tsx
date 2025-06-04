"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import "./about.css";
import { Form, Input, Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <ReactLenis root>
      <section className="pt-[10vh] px-4 md:px-12 lg:px-20 max-w-[1920px] mx-auto">
        <div className="flex flex-col gap-16">
          {/* 表單區塊 */}
          <div className="w-full max-w-2xl mx-auto">
            <Form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));
                console.log(data);
              }}
            >
              <Input
                isRequired
                errorMessage="Please enter a valid username"
                label="姓名"
                name="username"
                placeholder="輸入您的姓名"
                type="text"
              />
              <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                name="email"
                placeholder="您的信箱"
                type="email"
              />
              <div className="flex gap-4">
                <Button color="primary" type="submit">
                  送出
                </Button>
                <Button type="reset" variant="flat">
                  清除
                </Button>
              </div>
            </Form>
            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p>我們會在 1-2 個工作日內回覆您！</p>
              <p>有急件需求也歡迎來電：0800-XXX-XXX</p>
              <p>客服時間：週一至週五 09:00–18:00（國定假日休息）</p>
            </div>
          </div>

          {/* Q&A 按鈕 */}

          {/* 社群與地圖區塊 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-300 pt-10">
            {/* 左：社群圖片 + 介紹 */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-sm tracking-widest text-gray-600">
                  Social
                </span>
                <h3 className="text-xl font-bold">Facebook</h3>
              </div>
              <div className="w-full overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  placeholder="empty"
                  alt="facebook-social"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230909/pngtree-d-city-png-3d-city-png-3d-city-art-png-city-image_13113072.png"
                />
              </div>
              <p className="text-sm text-gray-700">
                Yi-Yuan is an Aichi-based design and construction company that
                creates chic architecture.
              </p>
            </div>

            {/* 右：地圖 + 地址 */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-sm tracking-widest text-gray-600">
                  Work
                </span>
                <h3 className="text-xl font-bold">Map</h3>
              </div>
              <div className="w-full overflow-hidden rounded-lg aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29131.79636988095!2d120.64383669972379!3d24.11996731884885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693c55c0686be1%3A0xc3a3cec1c5df6a18!2zNDAy5Y-w5Lit5biC5Y2X5Y2A!5e0!3m2!1szh-TW!2stw!4v1743684644979!5m2!1szh-TW!2stw"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  <b>YI-YUAN</b>
                </p>
                <p>台中市南屯區</p>
                <p>
                  南區位於臺灣臺中市中心，係由於1946年2月臺中市劃分區域時，其位於臺中市的南端而得名
                </p>
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
