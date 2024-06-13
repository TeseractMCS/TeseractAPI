import Teseract from "TeseractAPI/Teseract";
import PotionEffects from "./PotionEffects";


export default class PotionEffect {
  #type: PotionEffects;
  #duration: number;
  #amplifier: number;
  #showParticles: boolean;
  constructor(effectType: PotionEffects, duration: number, amplifier: number, showParticles?: boolean) {
    if (amplifier < 0 || amplifier > 255) {
      throw new RangeError("amplifier must be in 0-255 range.");
    }
    if (duration == Infinity) {
      throw new RangeError("duration cannot be infinite");
    }
    this.#type = effectType;
    this.#duration = duration;
    this.#amplifier = amplifier;
    this.#showParticles = showParticles ?? true;
  }
  public getType(): PotionEffects {
    try {
      return this.#type;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public getDuration(): number {
    try {
      return this.#duration;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public getAmplifier(): number {
    try {
      return this.#amplifier;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public showsParticles(): boolean {
    try {
      return this.#showParticles;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public setType(type: PotionEffects): void {
    try {
      this.#type = type;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public setDuration(duration: number): void {
    try {
      this.#duration = duration;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public setAmplifier(amplifier: number): void {
    try {
      this.#amplifier = amplifier;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
  public setShowParticles(showParticles: boolean): void {
    try {
      this.#showParticles = showParticles;
    } catch (error: any) {
      Teseract.log(error, error.stack)
    }
  }
}
