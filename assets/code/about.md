Script-ka kor ku xusan waa koodh jQuery ah oo **ka shaqeeya tabbed content** (macluumaad qaybsan oo loo kala doorto tabs) — sida qaybaha Web Design, Graphics, iyo Web Coding ee aad isticmaashay kor.

### Waxaan kuu sharaxayaa si kooban oo af Soomaali ah:

```javascript
$(document).on("click", ".naccs .menu div", function () {
```

✅ Markasta oo la gujiyo mid ka mid ah `div`-yada ku jira `.naccs .menu`, koodhkan ayaa shaqeynaya.

```javascript
  var numberIndex = $(this).index();
```

✅ Waxaa la helayaa index-ka (lambarka booska) ee tab-ka la gujiyey, si loo ogaado midka la rabo in la muujiyo.

```javascript
  if (!$(this).is("active")) {
```

✅ Haddii tab-kan aanu horey u firfircoonayn (active ahayn), markaas ayaa la beddelayaa.

```javascript
    $(".naccs .menu div").removeClass("active");
    $(".naccs ul li").removeClass("active");
```

✅ Tab-yada kale iyo qaybaha la xiriira waxaa laga saarayaa class-ka `active`.

```javascript
    $(this).addClass("active");
    $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
```

✅ Tab-ka hadda la gujiyey ayaa loo dhigaa `active`, sidoo kalena qaybta u dhigta (li-ga ku jira ul) waa la muujinayaa.

```javascript
    var listItemHeight = $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs ul").height(listItemHeight + "px");
```

✅ Waxaa la cabbirayaa dhererka qaybta la muujiyey si `ul`-ka guud loogu habeeyo dhererkaas — si aanay waxyaabaha hoos ku jira usoo boodin ama kala yaacin.

---

Vanilla JS


Halkan hoose waxaa ku qoran koodhkaaga oo aan u rogay **Vanilla JavaScript** (jQuery la'aan), isagoo qabta isla shaqadii: tab-ka la gujiyo ayaa muujinaya qaybtiisa, tab-yada kale & qaybaha kale waa la qarinayaa, dhererka qaybta la muujiyeyna si sax ah ayaa loo hagaajinayaa.

### ✅ Vanilla JavaScript version:

```html
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".naccs .menu div");
    const contents = document.querySelectorAll(".naccs ul li");
    const ul = document.querySelector(".naccs ul");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        if (!tab.classList.contains("active")) {
          // Remove 'active' from all tabs and content
          tabs.forEach(t => t.classList.remove("active"));
          contents.forEach(c => c.classList.remove("active"));

          // Add 'active' to the clicked tab and related content
          tab.classList.add("active");
          contents[index].classList.add("active");

          // Adjust height of ul to match current content
          ul.style.height = contents[index].offsetHeight + "px";
        }
      });
    });

    // Set initial height on load (optional)
    const activeContent = document.querySelector(".naccs ul li.active");
    if (activeContent) {
      ul.style.height = activeContent.offsetHeight + "px";
    }
  });
</script>
```

### ✅ Maxaa la beddelay?

* `$()` → `document.querySelector` iyo `querySelectorAll`
* `.on("click")` → `.addEventListener("click", ...)`
* `.index()` → `forEach` index
* `.innerHeight()` → `.offsetHeight`
* jQuery class manipulation → `classList.add()` iyo `classList.remove()`


