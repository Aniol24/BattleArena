<template>
  <div class="arena" :style="{ gridTemplateRows: gridRows, gridTemplateColumns: gridColumns }">
    <div
      v-for="(cell, index) in totalCells"
      :key="index"
      class="cell"
      :class="getSpriteClass(index)"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: 6,
      columns: 6
    }
  },
  computed: {
    totalCells() {
      return this.rows * this.columns
    },
    gridRows() {
      return `repeat(${this.rows}, 1fr)`
    },
    gridColumns() {
      return `repeat(${this.columns}, 1fr)`
    },
    cellSize() {
      return 600 / this.rows
    }
  },
  methods: {
    getSpriteClass(index) {
      const rowIndex = Math.floor(index / this.columns)
      const columnIndex = index % this.columns
      const isTopRow = rowIndex === 0
      const isBottomRow = rowIndex === this.rows - 1
      const isLeftColumn = columnIndex === 0
      const isRightColumn = columnIndex === this.columns - 1

      if (isTopRow && isLeftColumn) return 'top-left-corner'
      if (isTopRow && isRightColumn) return 'top-right-corner'
      if (isBottomRow && isLeftColumn) return 'bottom-left-corner'
      if (isBottomRow && isRightColumn) return 'bottom-right-corner'

      if (isTopRow) return 'horizontal-border-top'
      if (isBottomRow) return 'horizontal-border-bot'
      if (isLeftColumn) return 'vertical-border-esq'
      if (isRightColumn) return 'vertical-border-dre'

      return 'middle-sprite'
    }
  }
}
</script>

<style scoped>
.arena {
  display: grid;
  width: 600px;
  height: 600px;
  grid-template-rows: repeat(var(--rows), 1fr);
  grid-template-columns: repeat(var(--columns), 1fr);
  overflow: auto;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--cellSize) px;
  height: var(--cellSize) px;
  margin: 1px;
  background-size: cover;
  background-position: center;
}

.middle-sprite {
  background-image: url('../assets/imgs/terra.png');
}

.top-left-corner {
  background-image: url('../assets/imgs/top-esq.png');
}

.top-right-corner {
  background-image: url('../assets/imgs/top-dre.png');
}

.bottom-left-corner {
  background-image: url('../assets/imgs/baix-esq.png');
}

.bottom-right-corner {
  background-image: url('../assets/imgs/baix-dre.png');
}

.horizontal-border-top {
  background-image: url('../assets/imgs/top.png');
}
.horizontal-border-bot {
  background-image: url('../assets/imgs/baix.png');
}

.vertical-border-esq {
  background-image: url('../assets/imgs/esq.png');
}
.vertical-border-dre {
  background-image: url('../assets/imgs/dre.png');
}

@media (max-width: 768px) {
  .arena {
    display: grid;
    width: 100%;
    height: 350px;
    grid-template-rows: repeat(var(--rows), 1fr);
    grid-template-columns: repeat(var(--columns), 1fr);
    overflow: auto;
  }
}
</style>
