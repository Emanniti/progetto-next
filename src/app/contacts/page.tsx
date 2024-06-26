"use client";
import SpringAnimationText from "@/components/FramerMotionComponents/SpringAnimationText";
import TextTypingAnimation from "@/components/FramerMotionComponents/TextTypingAnimation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { fetchCall } from "./action";
import Link from "next/link";
import { ToastAction } from "@radix-ui/react-toast";
import sendMail from "@/utils/sendMail";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaCompleted, setCaptchaCompleted] = useState(true);
  const { toast } = useToast();
  const captchaRef: any = useRef(null);

  async function verifyCaptcha(test: any) {
    return await fetchCall(test);
  }

  function handleDisableSend() {
    if (name !== "" && email !== "" && message !== "" && email.includes("@") && email.includes(".")) {
      return false;
    } else {
      return true;
    }
  }

  async function sendEmail() {
    if (captchaRef.current !== null) {
      let captcha: any = await verifyCaptcha(captchaRef.current !== null ? captchaRef.current.getValue() : null);
      if (captcha !== undefined) {
        if (captcha.success) {
          setCaptchaCompleted(true);
          toast({
            title: "Email sent!",
            description: "Email successfully sent to the recipient provided.",
          });
          setTimeout(function () {
            document.location.href = "/";
          }, 4000);
          sendMail(name, email, message);
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "We were unable to send the email. Please try again later.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
          setCaptchaCompleted(false);
        }
      }
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "We were unable to send the email. Please try again later.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      setCaptchaCompleted(false);
    }
  }

  return (
    <div className="h-screen">
      <div className="flex justify-center">
        <div className="max-w-screen-xl">
          <div className="flex justify-center">
            <SpringAnimationText
              fontSize="text-4xl"
              color="text-paletteText"
              text="Contacts"
              duration={0.5}
              key={"1"}
              delay={0.5}
            />
          </div>
          <div>
            <TextTypingAnimation
              color="text-white "
              delay={400}
              duration={0.25}
              fontSize="text-2xl"
              text="I'm delighted that you're considering reaching out to me. Whether you're looking to collaborate on a project, inquire for more information, or just have a chat, I'm here for you.
                    You can send me an email directly at mannitiemanuele@gmail.com or use the contact form below. I'll be happy to answer your questions and discuss how we can work together to bring your projects to life.
                    If you prefer a more casual form of communication, you can also find me on social media. I'm active on LinkedIn and Twitter, so feel free to follow me and shoot me a message there.
                    Thank you for visiting my portfolio and considering reaching out. I look forward to hearing from you and seeing how I can help you bring your ideas to fruition!
                    Best regards,
                    Emanuele."
            />
            <div className="text-center mt-10">
              <SpringAnimationText
                fontSize="text-4xl"
                color="text-paletteText"
                text="Compile The forms"
                duration={0.5}
                key={"1"}
                delay={0.5}
              />
            </div>
            <div className="flex justify-center mt-10 gap-5">
              <div className="max-w-sm items-center gap-1.5">
                <Label className="text-white" htmlFor="email">
                  Name
                </Label>
                <Input onChange={(e) => setName(e.target.value)} className="max-w-[200px]" placeholder="Your Name" />
              </div>
              <div>
                <div className="max-w-sm items-center gap-1.5">
                  <Label className="text-white" htmlFor="email">
                    Mail
                  </Label>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-w-[300px]"
                    type="email"
                    placeholder="Your Email"
                  />
                  {email !== "" ? (
                    !email.includes("@") || !email.includes(".") ? (
                      <span className="text-red-500">Please enter a valid mail.</span>
                    ) : null
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Textarea onChange={(e) => setMessage(e.target.value)} className="max-w-[500px]" placeholder="Your Messge" />
            </div>
            <div className="flex justify-center mt-7">
              <ReCAPTCHA
                ref={captchaRef}
                sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY !== undefined ? process.env.NEXT_PUBLIC_CAPTCHA_KEY : ""}
              />
            </div>
            <div className="flex justify-center mt-1">
              {!captchaCompleted ? <span className="text-red-500">Captcha not completed or invalid.</span> : null}
            </div>

            <div className="flex justify-center mt-10">
              <Button onClick={() => sendEmail()} variant={"outline"} disabled={handleDisableSend()}>
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center"></div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </div>
  );
}
