<template>
  <div>
    <div
      id="container"
      v-show="getNumOfPlayers > 0"
      class="wheel"
      style="text-align: center;"
    ></div>
    <fade-transition>
      <p v-if="winner.length > 0" class="winner">{{ winner }}</p>
    </fade-transition>
    <p v-show="getNumOfPlayers === 0">
      ¡Hola!
      <br />Añade un título y opciones a tu super ruleta de la suerte.
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import gen from "color-generator";
import FontFaceObserver from "fontfaceobserver";

export default {
  name: "Wheel",
  data() {
    return {
      width: 375,
      height: 390,
      angularVelocity: 0,
      angularVelocityInitial: 0,
      angularVelocities: [],
      lastRotation: 0,
      controlled: false,
      angularFriction: 0.0005,
      target: null,
      activeWedge: null,
      stage: null,
      layer: null,
      wheel: null,
      pointer: null,
      finished: false,
      numWedges: 0,
      pointerY: 30,
      wheelY: 200,
      genVendor: gen,
      winner: "",
      wasLaunchedLocal: false,
      lockLaunch: false
    };
  },
  computed: {
    ...mapState(["players"]),
    ...mapGetters(["getNumOfPlayers"])
  },
  props: {
    forceAngularVelocity: {
      type: Number,
      default: 0
    },
    wasLaunched: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    forceAngularVelocity(newValue) {
      this.finished = false;
      this.angularVelocity = newValue;
      this.angularVelocityInitial = this.angularVelocity;
      this.winner = "";
    }
  },
  mounted() {
    Konva.angleDeg = false;
    this.numWedges = this.players.length;
    this.angularVelocity = this.forceAngularVelocity;
    this.wasLaunchedLocal = this.wasLaunched;
    const font = new FontFaceObserver("Museo Sans Rounded 500");

    font
      .load()
      .then(() => {
        console.log("Museo Sans Rounded 500 has loaded.");
        this.init();
      })
      .catch(error => {
        console.warn(error);
      });
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
        y: this.wheelY
      });

      for (var n = 0; n < this.numWedges; n++) {
        this.addWedge(n);
      }

      const center = new Konva.Circle({
        x: this.stage.width() / 2,
        y: this.wheelY,
        radius: 20,
        fill: "#2b2b2b",
        opacity: 1
      });

      this.pointer = new Konva.Wedge({
        fill: "black",
        lineJoin: "round",
        angle: 1,
        radius: 30,
        x: this.stage.width() / 2,
        y: this.pointerY,
        rotation: -90,
        shadowColor: "black",
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 2,
        shadowOpacity: 0.5
      });

      // add components to the stage
      this.layer.add(this.wheel);
      this.layer.add(this.pointer);
      this.layer.add(center);
      this.stage.add(this.layer);

      // bind events
      this.wheel.on("mousedown touchstart", evt => {
        if (!this.lockLaunch) {
          this.angularVelocity = 0;
          this.controlled = true;
          this.target = evt.target;
          this.finished = false;
        }
      });
      // add listeners to container
      this.stage.addEventListener(
        "mouseup touchend",
        () => {
          if (!this.lockLaunch) {
            this.controlled = false;
            this.winner = "";
            this.angularVelocity = this.getAverageAngularVelocity() * 5;
            this.angularVelocityInitial = this.angularVelocity;

            if (this.angularVelocity > 20) {
              this.angularVelocity = 20;
            } else if (this.angularVelocity < -20) {
              this.angularVelocity = 0;
            }

            this.angularVelocities = [];
          }
        },
        false
      );

      this.stage.addEventListener(
        "mousemove touchmove",
        () => {
          const mousePos = this.stage.getPointerPosition();
          if (this.controlled && mousePos && this.target && !this.lockLaunch) {
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
    getColor() {
      return this.genVendor(0.5, 0.8).hexString();
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

      const randomColor = this.getColor();
      const wedgeBackground = new Konva.Wedge({
        radius: this.width / 2,
        angle: angle,
        fill: randomColor,
        fillPriority: "red"
      });

      wedge.add(wedgeBackground);

      const A = (180 - angle) / 2;
      const cMini = (90 - A) / 2;

      const text = new Konva.Text({
        text: `        ${this.players[n]}`,
        fontFamily: "Museo Sans Rounded",
        fontSize: 30 - this.players[n].length * 0.9,
        fill: "white",
        align: "left",
        rotation: cMini * 2,
        offsetY: 12, // Font height
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
        y: 100
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
        if (diff > 0.01) {
          if (!this.lockLaunch) {
            this.$emit("lockLaunch");
          }
          this.lockLaunch = true;
          this.wheel.rotate(diff);
        } else if (!this.finished && !this.controlled) {
          if (shape && this.angularVelocityInitial > 5) {
            const text = shape
              .getParent()
              .findOne("Text")
              .text();
            const winner = text.split("\n").join("");
            this.winner = winner;
            setTimeout(() => {
              this.$router.push("questionary");
            }, 1000);
          }
          this.finished = true;
        }
      }
      this.lastRotation = this.wheel.rotation();

      if (shape) {
        if (!this.activeWedge || shape._id !== this.activeWedge._id) {
          this.pointer.y(this.pointerY - 10);

          new Konva.Tween({
            node: this.pointer,
            duration: 0.3,
            y: this.pointerY,
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
