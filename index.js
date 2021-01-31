// Meassages

var msg0 = new Array();
msg0[0] = "++ You tanked it chief! ++";
msg0[1] = "++ It bounced right off! ++";
msg0[2] = "++ Nothing to worry about. ++";
msg0[3] = "++ Ha! You laugh in the face of heresy! ++";

var msgHp = new Array();
msgHp[0] = "++ Stay frosty chief - their weapons pack quite a punch! ++";
msgHp[1] = "++ Damage pattern is consistent with Lascannon fire or equivalent. I’d find some cover if I were you chief. ++";
msgHp[2] = "++ You might want to dodge that next time... ++";
msgHp[3] = "++ You're gonna need a bigger boat... ++";

var msg1 = new Array();
msg1[0] = "++ Tis’ but a scratch. Unless that was your last hit point. In which case, commiserations. ++";
msg1[1] = "++ A minor wound. Get back in the fight chief! ++";
msg1[2] = "++ It'll buff right out! ++";
msg1[3] = "++ You've wasted my time and your own. ++";

var msg2_5 = new Array();
msg2_5[0] = "++ You'll live. Probably. ++";
msg2_5[1] = "++ I swear I had something for this... ++";
msg2_5[2] = "++ Do you want organ failure? Beacuse this is how you get organ failure. ++";
msg2_5[3] = "++ I don’t want to alarm you chief, but I think somebody is trying to kill you! ++";

var msg6_10 = new Array();
msg6_10[0] = "++ You really should learn to dodge more effectively. ++";
msg6_10[1] = "++ Oy, again with the not dodging! ++";
msg6_10[2] = "++ Can I have your cybernetics if you die? ++";
msg6_10[3] = "++ Look out!!! Oh wait, you’re already hit. My bad. ++";

var msg11_19 = new Array();
msg11_19[0] = "++ I'd recommend getting a new spleen installed. Pronto. ++";
msg11_19[1] = "++ Ouch, tough break chief. ++";
msg11_19[2] = "++ Medic!!! ++";
msg11_19[3] = "++ Womp womp. ++";

var msg20 = new Array();
msg20[0] = "++ You really should have ducked that one chief. ++";
msg20[1] = "++ Are you sure you were alive to begin with? ++";
msg20[2] = "++ Clean up in isle 3! ++";
msg20[3] = "++ Never mind. Maybe they’ll turn you into a servo-skull? ++";

// Calculating damage taken & displaying result

document.querySelector("body > div > div.button > button").addEventListener("click", function() {

  var armour = document.querySelector("body > div > div.defense.input-form > input.armourInput").value;
  var tough = document.querySelector("body > div > div.defense.input-form > input[type=number]:nth-child(4)").value;
  var dmgTotal = document.querySelector("body > div > div.attack.input-form > input.dmgInput").value;
  var wpnPen = document.querySelector("body > div > div.attack.input-form > input[type=number]:nth-child(4)").value;
  var penTotal = Math.max(0, (armour - wpnPen));
  var toughTotal = Math.max(0, tough);
  var result = Math.max(0, (dmgTotal - penTotal - toughTotal));

  document.querySelector("body > div > div.result > p > span:nth-child(1)").innerHTML = result;

  if (result === 1) {
    document.querySelector("body > div > div.result > p > span:nth-child(2)").innerHTML = "point";
  } else {
    document.querySelector("body > div > div.result > p > span:nth-child(2)").innerHTML = "points";
  };

  if (result > 0) {
    document.querySelector("body > div > div.result > p > span:nth-child(1)").style.color = "red";
  } else {
    document.querySelector("body > div > div.result > p > span:nth-child(1)").style.color = "#32ff6a";
  }

  // Determining bonus message based on damage taken and weapon pen

  if (result == 0) {
    var msgNum = msg0;
  }

  if (result >= 1 && wpnPen >= 10) {
    var msgNum = msgHp;
  }

  if (result == 1 && wpnPen < 10) {
    var msgNum = msg1;
  }

  if (result >= 2 && result <= 5 && wpnPen < 10) {
    var msgNum = msg2_5;
  }

  if (result >= 6 && result <= 10 && wpnPen < 10) {
    var msgNum = msg6_10;
  }

  if (result >= 11 && result <= 19 && wpnPen < 10) {
    var msgNum = msg11_19;
  }

  if (result >= 20) {
    var msgNum = msg20;
  }

  var random = Math.floor(Math.random() * 4)

  var msg = msgNum[random];

  document.querySelector("body > div > div.flavour > p").innerHTML = msg;

});
