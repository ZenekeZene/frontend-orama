<template>
  <div id="container"></div>
</template>
<script>
export default {
  name: "Wheel",
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      angularVelocity: 0,
      angularVelocities: [],
      lastRotation: 0,
      controlled: false,
      angularFriction: 0.2,
      target: null,
      activeWedge: null,
      stage: null,
      layer: null,
      wheel: null,
      pointer: null,
      finished: false,
      players: ["Miguel", "Héctor", "Jorge", "Cris", "Arantxa", "Eider"],
      numWedges: 0,
    };
  },
  mounted() {
    Konva.angleDeg = false;
    this.numWedges = this.players.length;
    this.init();
  },
  methods: {
    init() {
      this.stage = new Konva.Stage({
        container: "container",
        width: this.width,
        height: this.height
      });
      this.layer = new Konva.Layer();
      this.wheel = new Konva.Group({
        x: this.stage.width() / 2,
        y: 410
      });

      for (var n = 0; n < this.numWedges; n++) {
        this.addWedge(n);
      }
      this.pointer = new Konva.Wedge({
        fill: "black",
        lineJoin: "round",
        angle: 1,
        radius: 30,
        x: this.stage.width() / 2,
        y: 200,
        rotation: -90
      });

      // add components to the stage
      this.layer.add(this.wheel);
      this.layer.add(this.pointer);
      this.stage.add(this.layer);

      // bind events
      this.wheel.on("mousedown touchstart", evt => {
        this.angularVelocity = 0;
        this.controlled = true;
        this.target = evt.target;
        this.finished = false;
      });
      // add listeners to container
      this.stage.addEventListener(
        "mouseup touchend",
        () => {
          this.controlled = false;
          this.angularVelocity = this.getAverageAngularVelocity() * 5;

          if (this.angularVelocity > 20) {
            this.angularVelocity = 20;
          } else if (this.angularVelocity < -20) {
            this.angularVelocity = -20;
          }

          this.angularVelocities = [];
        },
        false
      );

      this.stage.addEventListener(
        "mousemove touchmove",
        evt => {
          const mousePos = this.stage.getPointerPosition();
          if (this.controlled && mousePos && this.target) {
            const x = mousePos.x - this.wheel.getX();
            const y = mousePos.y - this.wheel.getY();
            const atan = Math.atan(y / x);
            const rotation = x >= 0 ? atan : atan + Math.PI;
            const targetGroup = this.target.getParent();

            this.wheel.rotation(
              rotation - targetGroup.startRotation - this.target.angle() / 2
            );
          }
        },
        false
      );

      const anim = new Konva.Animation(this.animate, this.layer);

      // wait one second and then spin the wheel
      setTimeout(function() {
        anim.start();
      }, 1000);
    },
    byte2Hex(n) {
      const nybHexString = "0123456789ABCDEF";
      return (
        String(nybHexString.substr((n >> 4) & 0x0f, 1)) +
        nybHexString.substr(n & 0x0f, 1)
      );
    },
    RGB2Color(r, g, b) {
      return "#" + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
    },
    getColor(item, maxitem) {
      const phase = 0;
      const center = 128;
      const width = 127;
      const frequency = (Math.PI * 2) / maxitem;

      const red = Math.sin(frequency * item + 2 + phase) * width + center;
      const green = Math.sin(frequency * item + 0 + phase) * width + center;
      const blue = Math.sin(frequency * item + 4 + phase) * width + center;

      return this.RGB2Color(red, green, blue);
    },
    getAverageAngularVelocity() {
      let total = 0;
      const len = this.angularVelocities.length;

      if (len === 0) {
        return 0;
      }

      for (var n = 0; n < len; n++) {
        total += this.angularVelocities[n];
      }

      return total / len;
    },
    addWedge(n) {
      const angle = (2 * Math.PI) / this.numWedges;

      const wedge = new Konva.Group({
        rotation: (2 * n * Math.PI) / this.numWedges
      });

      const wedgeBackground = new Konva.Wedge({
        radius: this.width / 2,
        angle: angle,
		fill: this.getColor(n, this.numWedges),
        fillPriority: 'red',
      });

      wedge.add(wedgeBackground);

      const text = new Konva.Text({
        text: this.players[n],
        fontFamily: "Helvetica",
        fontSize: this.width * 0.05,
        fill: "white",
        align: "center",
        rotation: (Math.PI + angle) / 2,
        x: this.width / 2 - 20,
        y: this.width / this.numWedges,
        listening: false
      });

      wedge.add(text);
      text.cache();

      wedge.startRotation = wedge.rotation();

      this.wheel.add(wedge);
    },
    animate(frame) {
      // handle wheel spin
      const angularVelocityChange =
        (this.angularVelocity * frame.timeDiff * (1 - this.angularFriction)) /
        1000;
      this.angularVelocity -= angularVelocityChange;

      // activate / deactivate wedges based on point intersection
      const shape = this.stage.getIntersection({
        x: this.stage.width() / 2,
        y: 400
      });


      if (this.controlled) {
        if (this.angularVelocities.length > 10) {
          this.angularVelocities.shift();
        }

        this.angularVelocities.push(
          ((this.wheel.rotation() - this.lastRotation) * 1000) / frame.timeDiff
        );
      } else {
        const diff = (frame.timeDiff * this.angularVelocity) / 1000;
        if (diff > 0.0001) {
          this.wheel.rotate(diff);
        } else if (!this.finished && !this.controlled) {
          if (shape) {
            const text = shape
              .getParent()
              .findOne("Text")
              .text();
            const price = text.split("\n").join("");
            console.log("The winner is " + price);
          }
          this.finished = true;
        }
      }
      this.lastRotation = this.wheel.rotation();

      if (shape) {
        if (
          shape &&
          (!this.activeWedge || shape._id !== this.activeWedge._id)
        ) {
          this.pointer.y(220);

          new Konva.Tween({
            node: this.pointer,
            duration: 0.3,
            y: 230,
            easing: Konva.Easings.ElasticEaseOut
          }).play();

          if (this.activeWedge) {
            this.activeWedge.fillPriority("red");
          }
          shape.fillPriority("fill");
          this.activeWedge = shape;
        }
      }
    }
  }
};
</script>