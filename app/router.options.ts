import type { RouterConfig } from "@nuxt/schema";

export default {
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 100,
                behavior: "smooth"
            }
        }
      
          // The remainder is optional but maybe useful as well
      
          // if link is to same page, scroll to top with smooth behavior
          if (to === from) {
            return {
              left: 0,
              top: 0,
              behavior: 'smooth',
            };
          }
    }
} satisfies RouterConfig;