window.onload = function () {
    slideMin();
    slideMax();
  };
  
  const minVal = document.querySelector(".min-val");
  const maxVal = document.querySelector(".max-val");
  const priceInputMin = document.querySelector(".min-input");
  const priceInputMax = document.querySelector(".max-input");
  const minTooltip = document.querySelector(".min-tooltip");
  const maxTooltip = document.querySelector(".max-tooltip");
  const minGap = 0;
  const range = document.querySelector(".slider-track");
  const sliderMinValue = parseInt(minVal.min);
  const sliderMaxValue = parseInt(maxVal.max);
  
  function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if(gap <= minGap){
      minVal.value = parseInt(maxVal.value) - minGap;
    }
    minTooltip.innerHTML = "$" + minVal.value + " " + "-";
    priceInputMin.value = minVal.value;
    setArea();
  }
  
  function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if(gap <= minGap){
      maxVal.value = parseInt(minVal.value) + minGap;
    }
    maxTooltip.innerHTML = "$" + maxVal.value;
    priceInputMax.value = maxVal.value;
    setArea();
  }
  
  function setArea() {
    range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
    minTooltip.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
    range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
    maxTooltip.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
  }
  





  window.onload = function () {
    slideMin1();
    slideMax1();
  };
  
  const minVal1 = document.querySelector(".min-val1");
  const maxVal1 = document.querySelector(".max-val1");
  const priceInputMin1 = document.querySelector(".min-input1");
  const priceInputMax1 = document.querySelector(".max-input1");
  const minTooltip1 = document.querySelector(".min-tooltip1");
  const maxTooltip1 = document.querySelector(".max-tooltip1");
  const minGap1 = 0;
  const range1 = document.querySelector(".slider-track1");
  const sliderMinValue1 = parseInt(minVal1.min);
  const sliderMaxValue1 = parseInt(maxVal1.max);
  
  function slideMin1() {
    let gap = parseInt(maxVal1.value) - parseInt(minVal1.value);
    if(gap <= minGap1){
      minVal1.value = parseInt(maxVal1.value) - minGap1;
    }
    minTooltip1.innerHTML = "$" + minVal1.value + " " + "-";
    priceInputMin1.value = minVal1.value;
    setArea();
  }
  
  function slideMax1() {
    let gap = parseInt(maxVal1.value) - parseInt(minVal1.value);
    if(gap <= minGap1){
      maxVal1.value = parseInt(minVal1.value) + minGap1;
    }
    maxTooltip1.innerHTML = "$" + maxVal1.value;
    priceInputMax1.value = maxVal1.value;
    setArea();
  }
  
  function setArea() {
    range1.style.left = (minVal1.value / sliderMaxValue1) * 100 + "%";
    minTooltip1.style.left = (minVal1.value / sliderMaxValue1) * 100 + "%";
    range1.style.right = 100 - (maxVal1.value / sliderMaxValue1) * 100 + "%";
    maxTooltip1.style.right = 100 - (maxVal1.value / sliderMaxValue1) * 100 + "%";
  }
  