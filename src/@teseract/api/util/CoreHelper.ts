// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { Vector2, Vector3 as MinecraftVector3 } from '@minecraft/server';
import { clampNumber } from './general/Clamp';

/**
 * Utilities operating on MinecraftVector3 objects. All methods are static and do not modify the input objects.
 *
 * @public
 */
export class Vector3Utils {
    /**
     * equals
     *
     * Check the equality of two vectors
     */
    static equals(v1: MinecraftVector3, v2: MinecraftVector3): boolean {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
    }

    /**
     * add
     *
     * Add two vectors to produce a new vector
     */
    static add(v1: MinecraftVector3, v2: MinecraftVector3): MinecraftVector3 {
        return { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z };
    }

    /**
     * subtract
     *
     * Subtract two vectors to produce a new vector (v1-v2)
     */
    static subtract(v1: MinecraftVector3, v2: MinecraftVector3): MinecraftVector3 {
        return { x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z };
    }

    /** scale
     *
     * Multiple all entries in a vector by a single scalar value producing a new vector
     */
    static scale(v1: MinecraftVector3, scale: number): MinecraftVector3 {
        return { x: v1.x * scale, y: v1.y * scale, z: v1.z * scale };
    }

    /**
     * dot
     *
     * Calculate the dot product of two vectors
     */
    static dot(a: MinecraftVector3, b: MinecraftVector3): number {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

    /**
     * cross
     *
     * Calculate the cross product of two vectors. Returns a new vector.
     */
    static cross(a: MinecraftVector3, b: MinecraftVector3): MinecraftVector3 {
        return {
            x: a.y * b.z - a.z * b.y,
            y: a.z * b.x - a.x * b.z,
            z: a.x * b.y - a.y * b.x,
        };
    }

    /**
     * magnitude
     *
     * The magnitude of a vector
     */
    static magnitude(v: MinecraftVector3): number {
        return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
    }

    /**
     * distance
     *
     * Calculate the distance between two vectors
     */
    static distance(a: MinecraftVector3, b: MinecraftVector3): number {
        return Vector3Utils.magnitude(Vector3Utils.subtract(a, b));
    }

    /**
     * normalize
     *
     * Takes a vector 3 and normalizes it to a unit vector
     */
    static normalize(v: MinecraftVector3): MinecraftVector3 {
        const mag = Vector3Utils.magnitude(v);
        return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
    }

    /**
     * floor
     *
     * Floor the components of a vector to produce a new vector
     */
    static floor(v: MinecraftVector3): MinecraftVector3 {
        return { x: Math.floor(v.x), y: Math.floor(v.y), z: Math.floor(v.z) };
    }

    /**
     * toString
     *
     * Create a string representation of a MinecraftVector3
     */
    static toString(v: MinecraftVector3, options?: { decimals?: number; delimiter?: string }): string {
        const decimals = options?.decimals ?? 2;
        const str: string[] = [v.x.toFixed(decimals), v.y.toFixed(decimals), v.z.toFixed(decimals)];
        return str.join(options?.delimiter ?? ', ');
    }

    /**
     * clamp
     *
     * Clamps the components of a vector to limits to produce a new vector
     */
    static clamp(
        v: MinecraftVector3,
        limits?: {
            min?: Partial<MinecraftVector3>;
            max?: Partial<MinecraftVector3>;
        }
    ): MinecraftVector3 {
        return {
            x: clampNumber(v.x, limits?.min?.x ?? Number.MIN_SAFE_INTEGER, limits?.max?.x ?? Number.MAX_SAFE_INTEGER),
            y: clampNumber(v.y, limits?.min?.y ?? Number.MIN_SAFE_INTEGER, limits?.max?.y ?? Number.MAX_SAFE_INTEGER),
            z: clampNumber(v.z, limits?.min?.z ?? Number.MIN_SAFE_INTEGER, limits?.max?.z ?? Number.MAX_SAFE_INTEGER),
        };
    }

    /**
     * lerp
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     */
    static lerp(a: MinecraftVector3, b: MinecraftVector3, t: number): MinecraftVector3 {
        return {
            x: a.x + (b.x - a.x) * t,
            y: a.y + (b.y - a.y) * t,
            z: a.z + (b.z - a.z) * t,
        };
    }

    /**
     * slerp
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     */
    static slerp(a: MinecraftVector3, b: MinecraftVector3, t: number): MinecraftVector3 {
        const theta = Math.acos(Vector3Utils.dot(a, b));
        const sinTheta = Math.sin(theta);
        const ta = Math.sin((1.0 - t) * theta) / sinTheta;
        const tb = Math.sin(t * theta) / sinTheta;
        return Vector3Utils.add(Vector3Utils.scale(a, ta), Vector3Utils.scale(b, tb));
    }
}

/**
 * Utilities operating on Vector2 objects. All methods are static and do not modify the input objects.
 *
 * @public
 */
export class Vector2Utils {
    /**
     * toString
     *
     * Create a string representation of a vector2
     */
    static toString(v: Vector2, options?: { decimals?: number; delimiter?: string }): string {
        const decimals = options?.decimals ?? 2;
        const str: string[] = [v.x.toFixed(decimals), v.y.toFixed(decimals)];
        return str.join(options?.delimiter ?? ', ');
    }
}

/**
 * up
 *
 * A unit vector representing the world UP direction (0,1,0)
 *
 * @public
 */
export const MinecraftVector3_UP: MinecraftVector3 = { x: 0, y: 1, z: 0 };
/**
 * down
 *
 * A unit vector representing the world DOWN direction (0,-1,0)
 *
 * @public
 */
export const MinecraftVector3_DOWN: MinecraftVector3 = { x: 0, y: -1, z: 0 };
/**
 * left
 *
 * A unit vector representing the world LEFT direction (-1,0,0)
 *
 * @public
 */
export const MinecraftVector3_LEFT: MinecraftVector3 = { x: -1, y: 0, z: 0 };
/**
 * right
 *
 * A unit vector representing the world RIGHT direction (1,0,0)
 *
 * @public
 */
export const MinecraftVector3_RIGHT: MinecraftVector3 = { x: 1, y: 0, z: 0 };
/**
 * forward
 *
 * A unit vector representing the world FORWARD direction (0,0,1)
 *
 * @public
 */
export const MinecraftVector3_FORWARD: MinecraftVector3 = { x: 0, y: 0, z: 1 };
/**
 * back
 *
 * A unit vector representing the world BACK direction (0,0,-1)
 *
 * @public
 */
export const MinecraftVector3_BACK: MinecraftVector3 = { x: 0, y: 0, z: -1 };
/**
 * one
 *
 * A unit vector representing the value of 1 in all directions (1,1,1)
 *
 * @public
 */
export const MinecraftVector3_ONE: MinecraftVector3 = { x: 1, y: 1, z: 1 };
/**
 * zero
 *
 * A unit vector representing the value of 0 in all directions (0,0,0)
 *
 * @public
 */
export const MinecraftVector3_ZERO: MinecraftVector3 = { x: 0, y: 0, z: 0 };
/**
 * west
 *
 * A unit vector representing the world WEST direction (-1,0,0)
 *   (same as LEFT)
 *
 * @public
 */
export const MinecraftVector3_WEST: MinecraftVector3 = { x: -1, y: 0, z: 0 };
/**
 * east
 *
 * A unit vector representing the world EAST direction (-1,0,0)
 *   (same as RIGHT)
 *
 * @public
 */
export const MinecraftVector3_EAST: MinecraftVector3 = { x: 1, y: 0, z: 0 };
/**
 * north
 *
 * A unit vector representing the world NORTH direction (-1,0,0)
 *   (same as FORWARD)
 *
 * @public
 */
export const MinecraftVector3_NORTH: MinecraftVector3 = { x: 0, y: 0, z: 1 };
/**
 * south
 *
 * A unit vector representing the world SOUTH direction (-1,0,0)
 *   (same as BACK)
 *
 * @public
 */
export const MinecraftVector3_SOUTH: MinecraftVector3 = { x: 0, y: 0, z: -1 };