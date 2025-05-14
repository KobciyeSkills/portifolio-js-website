
### 🔁 `interleaveOffset = 0.5`

* **interleaveOffset** wuxuu ka dhigan yahay inta jeer ee "slide-inner" uu dhaqaaqi karo marka slide-ka uu socdo. Qiyamka hooseeya waxay keenaan dhaqdhaqaaq yar, qiyamka sare waxay keenaan dhaqdhaqaaq badan.

---

### ⚙️ `swiperOptions` – Xulashooyinka Slider-ka:

Kani waa dejinta (config) loogu talagalay **Swiper**:

* `loop: true`: Slides-ka waxay wareegayaan joogto ah (markii la gaaro dhamaadka, wuxuu dib ugu laabanayaa bilowga).
* `speed: 1000`: Xawaaraha beddelka slide-ka waa 1000ms (1 ilbiriqsi).
* `grabCursor: true`: Marka mouse lagu dul hayo, cursor-ka wuxuu isu beddelaa sida gacanta.
* `watchSlidesProgress: true`: Waxaa lagu ogaanayaa sida slide-yadu u socdaan si animations loogu sameeyo.
* `mousewheelControl`, `keyboardControl`: Waxaa loo ogol yahay in laga xakameeyo mouse-ka ama keyboard-ka.
* `navigation`: Waxaa la isticmaalaa badhamada `.swiper-button-next` iyo `.swiper-button-prev` si loo dhaqaaqo hore iyo gadaal.

---

### 📦 `on` – Dhacdooyinka (Events):

#### `progress`:

* Markasta oo slider-ka uu dhaqaaqayo, waxaa la xisaabinayaa inta uu slide-ka horey ama gadaal u dhacay.
* Waxaana lagu turjumayaa dhaqaaq gudaha ah (`translate3d`) oo lagu sameeyo qaybta `slide-inner`.

#### `touchStart`:

* Marka la bilaabo taabashada (touch), dhammaan slides-ka waxaa laga saaraa `transition`, si dhaqaaq kastaa uu u noqdo mid degdeg ah.

#### `setTransition(speed)`:

* Waxaa la dhigayaa xawaaraha `transition` ee slide iyo gudaha `slide-inner` si uu si siman u dhaqaaqo marka la kala beddelayo.

---

### 💡 `new Swiper(...)`

* Ugu dambeyn, slider-ka ayaa la abuuraa isagoo isticmaalaya dejimaha sare, waxaana lagu dabaqayaa qaybta leh class `.swiper-container`.

---
