import { defineStore } from "pinia";

export const useTabBarStore = defineStore("tabBar", () => {
  const list = ref([
    {
      title: "印刷计价系统",
      items: [
        {
          name: "胶印",
          path: "/admin/OffestPrinting",
        },
        // {
        //   name: "数码印刷",
        //   path: "/admin/DigitalPrinting",
        // },
      ],
    },
  ]);
  const isCollapse = ref(false);
  return { list, isCollapse };
});
