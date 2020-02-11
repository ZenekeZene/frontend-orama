<template>
  <div id="container" ref="spinner"></div>
</template>
<script>
export default {
  name: "Spinner",
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  mounted() {
    Konva.angleDeg = false;
    var stage = new Konva.Stage({
      container: "container",
      width: 500,
      height: 500
    });

    var animatedLayer = new Konva.Layer();
    var star = new Konva.Star({
      x: stage.width() / 2,
      y: stage.height() / 2,
      outerRadius: 80,
      innerRadius: 40,
      stroke: "#005500",
      fill: "#b5ff88",
      strokeWidth: 4,
      numPoints: 5,
      lineJoin: "round",
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      shadowBlur: 10,
      shadowColor: "black",
      shadowOpacity: 0.5,
      opacity: 0.8
    });

    // custom properties
    star.lastRotation = 0;
    star.angularVelocity = 6;
    star.controlled = false;

    star.on("mousedown touchstart", function(evt) {
      this.angularVelocity = 0;
      this.controlled = true;
    });

    animatedLayer.add(star);

    var center = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 3,
      fill: "#555"
    });

    animatedLayer.add(center);

    // add listeners to container
    stage.on("mouseup touchend", function() {
      star.controlled = false;
    });

    stage.on("mousemove touchmove", function() {
      if (star.controlled) {
        var mousePos = stage.getPointerPosition();
        var x = star.x() - mousePos.x;
        var y = star.y() - mousePos.y;
        star.rotation(0.5 * Math.PI + Math.atan(y / x));

        if (mousePos.x <= stage.width() / 2) {
          star.rotate(Math.PI);
        }
      }
    });

    stage.add(animatedLayer);

    let anim = new Konva.Animation(frame => {
      this.animate(animatedLayer, star, frame);
    }, animatedLayer);

    // wait one second and then spin the star
    setTimeout(function() {
      anim.start();
    });
  },
  methods: {
    animate(animatedLayer, star, frame) {
      // 20% slow down per second
      var angularFriction = 0.2;
      var angularVelocityChange =
        (star.angularVelocity * frame.timeDiff * (1 - angularFriction)) / 1000;
      star.angularVelocity -= angularVelocityChange;

      if (star.controlled) {
        star.angularVelocity =
          ((star.rotation() - star.lastRotation) * 1000) / frame.timeDiff;
      } else {
        star.rotate((frame.timeDiff * star.angularVelocity) / 1000);
      }

      star.lastRotation = star.rotation();
    }
  }
};
</script>
<style lang="scss" scoped>
#container {
  position: absolute;
}
</style>
