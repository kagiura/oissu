$(function () {
  console.log("tumblr-fix.js loaded");
  $("p").each(function () {
    const $thisP = $(this);
    if ($thisP.text().match(/\[.*♪.*\]/g)) {
      console.log($thisP);
      const $oissuDiv = $("<div class='oissu'></div>");
      $thisP.before($oissuDiv);

      let $cur = $thisP.next();
      let o = 0;
      while (o < 500) {
        if ($cur.text().match(/\[.*☆.*\]/g)) {
          $cur.remove();
          break;
        }
        console.log($cur);
        $oissuDiv.append($cur.clone());
        const $prev = $cur;
        $cur = $prev.next();
        $prev.remove();
        o++;
      }
      if (o >= 500) {
        console.log("oissu error: too many elements (max is 500)");
        console.info(
          "this can be adjusted in the fix code. contact me for more info"
        );
      }
    }
  });
  oissu.initialize();
});
