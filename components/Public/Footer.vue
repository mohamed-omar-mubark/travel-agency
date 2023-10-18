<template>
  <footer class="footer pb-3 bg-white">
    <div class="container">
      <div class="footer-columns grid py-5 border-y-1 border-gray-200">
        <div class="col-12 sm:col-6 md:col-4 lg:col-3">
          <div class="column px-4 mb-3 md:mb-0">
            <span class="column-title block mb-3 font-bold text-color">
              {{ $t("global.about_us") }}
            </span>
            <p class="mb-3 font-normal text-color-secondary line-height-3">
              {{ $t("global.footer_subtitle") }}
            </p>
            <p class="font-medium text-color line-height-3">
              {{ $t("global.copyright") }}
            </p>
          </div>
        </div>
        <div class="col-12 sm:col-6 md:col-4 lg:col-3">
          <div class="column px-4 mb-3 md:mb-0">
            <span class="column-title block mb-2 font-bold text-color">
              {{ $t("global.help") }}
            </span>
            <ul>
              <li>
                <a
                  href="mailto:support@Travel Agency.com"
                  class="column-link block py-2 font-medium text-color-secondary hover:text-primary"
                >
                  support@travel-agency.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="copy-right pt-5 flex justify-content-center md:justify-content-between align-items-center gap-4 flex-wrap"
      >
        <div class="social-media">
          <ul class="flex justify-content-start align-items-center gap-4">
            <li>
              <a href="#" aria-label="facebook">
                <i class="pi pi-facebook text-2xl text-primary"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="whatsapp">
                <i class="pi pi-whatsapp text-2xl text-primary"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="instagram">
                <i class="pi pi-instagram text-2xl text-primary"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="payment-getways">
          <NuxtImg
            src="/payment-getways.webp"
            alt=" Travel Agency payment getways"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
.footer {
  .copy-right {
    .social-media {
      ul {
        li {
          a {
            i {
              transition: 0.3s;
            }

            &:hover {
              i {
                transform: translateY(-3px);
              }
            }
          }
        }
      }
    }

    .payment-getways {
      img {
        width: 318px;
        height: 28px;
        object-fit: cover;
      }
    }
  }
}
</style>
