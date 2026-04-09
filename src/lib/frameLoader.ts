const TOTAL_FRAMES = 240;

function getFramePath(index: number): string {
    const padded = String(index).padStart(3, "0");
    return `/frames/frame${padded}.jpg`;
}

export function preloadFrames(
    onProgress?: (loaded: number, total: number) => void
): Promise<HTMLImageElement[]> {
    return new Promise((resolve) => {
        const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
        let loadedCount = 0;

        const onLoad = () => {
            loadedCount++;
            onProgress?.(loadedCount, TOTAL_FRAMES);
            if (loadedCount === TOTAL_FRAMES) {
                resolve(images);
            }
        };

        // Eagerly load first 15 frames
        for (let i = 1; i <= 15; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = onLoad;
            img.onerror = onLoad;
            images[i - 1] = img;
        }

        // Lazily load remaining frames
        setTimeout(() => {
            for (let i = 16; i <= TOTAL_FRAMES; i++) {
                const img = new Image();
                img.src = getFramePath(i);
                img.onload = onLoad;
                img.onerror = onLoad;
                images[i - 1] = img;
            }
        }, 100);
    });
}

export { TOTAL_FRAMES, getFramePath };
