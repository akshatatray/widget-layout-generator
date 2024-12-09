export const findPositionForBlock = (layout, maxCol = 8, maxRow = 20, blockW = 2, blockH = 2) => {
    const grid = Array.from({ length: maxRow }, () => Array(maxCol).fill(false));
    layout.forEach(({ x, y, w, h }) => {
        for (let i = y; i < y + h; i++) {
            for (let j = x; j < x + w; j++) {
                grid[i][j] = true;
            }
        }
    });
    for (let y = 0; y <= maxRow - blockH; y++) {
        for (let x = 0; x <= maxCol - blockW; x++) {
            let spaceAvailable = true;
            for (let i = 0; i < blockH; i++) {
                for (let j = 0; j < blockW; j++) {
                    if (grid[y + i][x + j]) {
                        spaceAvailable = false;
                        break;
                    }
                }
                if (!spaceAvailable) break;
            }
            if (spaceAvailable) {
                return { x, y };
            }
        }
    }
    const lastRow = layout.reduce((maxY, block) => Math.max(maxY, block.y + block.h), 0);
    return {
        x: 0,
        y: Math.min(lastRow, maxRow - blockH), // Ensure it doesn't exceed maxRow
    };
}