import Teseract from "TeseractAPI/Teseract";
import MersenneTwister from "TeseractAPI/MersenneTwister";

class Chunk {
  #baseX: number;
  #baseZ: number;
  #minX: number;
  #minZ: number;
  #maxX: number;
  #maxZ: number;
  #worldX: number;
  #worldZ: number;
  constructor(x: number, z: number) {
    this.#baseX = x;
    this.#baseZ = z;
    this.#minX = Math.floor(x / 16) * 16;
    this.#minZ = Math.floor(z / 16) * 16;
    this.#maxX = this.#minX + 15;
    this.#maxZ = this.#minZ + 15;
    this.#worldX = Math.floor(this.#minX / 16);
    this.#worldZ = Math.floor(this.#minZ / 16);
  }

  public getBaseX(): number {
    try {
      return this.#baseX;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }

  public getBaseZ(): number {
    try {
      return this.#baseZ;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }

  public getMinX(): number {
    try {
      return this.#minX;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }

  public getMinZ(): number {
    try {
      return this.#minZ;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }

  public getMaxX(): number {
    try {
      return this.#maxX;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }

  public getMaxZ(): number {
    try {
      return this.#maxZ;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }

  public getWorldX(): number {
    try {
      return this.#worldX;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }

  public getWorldZ(): number {
    try {
      return this.#worldZ;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }

  public isSlimeChunk(): boolean {
    const chunkX = Math.floor(this.#baseX / 16) >>> 0;
    const chunkZ = Math.floor(this.#baseZ / 16) >>> 0;
    const seed =
      ((a, b) => {
        let a00 = a & 0xffff;
        let a16 = a >>> 16;
        let b00 = b & 0xffff;
        let b16 = b >>> 16;
        let c00 = a00 * b00;
        let c16 = c00 >>> 16;

        c16 += a16 * b00;
        c16 &= 0xffff;
        c16 += a00 * b16;

        let lo = c00 & 0xffff;
        let hi = c16 & 0xffff;

        return ((hi << 16) | lo) >>> 0;
      })(chunkX, 0x1f1f1f1f) ^ chunkZ;

    const mt = new (MersenneTwister as any)(seed);
    const n = mt.nextInt();
    const isSlime = n % 10 == 0;

    return isSlime;
  }
}

export default Chunk;
