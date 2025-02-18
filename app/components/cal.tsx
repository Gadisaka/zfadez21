"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#543310" }, dark: {} },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      namespace="30min"
      calLink="gadisa-kasaye-tz2qwp/30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}

export function BookingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "haircut-at-zfadez21" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#543310" }, dark: {} },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      data-cal-namespace="haircut-at-zfadez21"
      data-cal-link="zfadez21/haircut-at-zfadez21"
      data-cal-config='{"layout":"month_view","theme":"light"}'
      className="px-6 py-2 md:py-6 lg:py-2 bg-[#543310] border-[#F8F4E1] border-2 rounded-lg shadow-md hover:bg-[#74512D] transition"
    >
      Book an Appointment
    </button>
  );
}
