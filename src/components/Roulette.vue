<template>
  <div>
    <canvas ref="canvas" width="500" height="500"></canvas>
  </div>
</template>
<script>
export default {
  name: "Roulette",
  data() {
    return {
      options: ["Héctor", "Jorge", "Cris", "Eider", "Miguel", "Arantxa"],
      startAngle: 0,
      arc: 0,
      spinTimeout: null,

      spinArcStart: 10,
      spinTime: 0,
      spinTimeTotal: 0,

      ctx: null,
      configKonva: {
        width: 200,
        height: 200
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4
      }
    };
  },
  mounted() {
    this.arc = Math.PI / (this.options.length / 2);
    this.drawRouletteWheel();
  },
  methods: {
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
    drawRouletteWheel() {
      let canvas = this.$refs.canvas;
      if (canvas.getContext) {
        let outsideRadius = 200;
        let textRadius = 160;
        let insideRadius = 0;

        this.ctx = canvas.getContext("2d");
        this.ctx.clearRect(0, 0, 350, 350);

        this.ctx.font = "16px Helvetica, Arial";

        for (let i = 0; i < this.options.length; i++) {
          let angle = this.startAngle + i * this.arc;
          this.ctx.fillStyle = this.getColor(i, this.options.length);

          this.ctx.beginPath();
          this.ctx.arc(250, 250, outsideRadius, angle, angle + this.arc, false);
          this.ctx.arc(250, 250, insideRadius, angle + this.arc, angle, true);
          this.ctx.fill();

          this.ctx.save();
          this.ctx.shadowOffsetX = -1;
          this.ctx.shadowOffsetY = -1;
          this.ctx.shadowBlur = 0;
          this.ctx.fillStyle = "black";
          this.ctx.translate(
            250 + Math.cos(angle + this.arc / 2) * textRadius,
            250 + Math.sin(angle + this.arc / 2) * textRadius
          );
          this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
          var text = this.options[i];
          this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
          this.ctx.restore();
        }
      }
    }
  }
};
</script>
