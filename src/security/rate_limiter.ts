import { RequestContext, RateLimitPolicy } from '../types';

export class TokenBucketRateLimiter {
  private buckets: Map<string, { tokens: number; lastRefill: number }> = new Map();
  private policy: RateLimitPolicy;

  constructor(policy: RateLimitPolicy) {
    this.policy = policy;
  }

  public allowRequest(ctx: RequestContext): boolean {
    const key = `${this.policy.keyPrefix}:${ctx.userId || ctx.ipAddress}`;
    const now = Date.now();
    let bucket = this.buckets.get(key);

    if (!bucket) {
      bucket = { tokens: this.policy.maxRequests, lastRefill: now };
      this.buckets.set(key, bucket);
    }

    const elapsedSeconds = (now - bucket.lastRefill) / 1000;
    const tokensToAdd = elapsedSeconds * (this.policy.maxRequests / this.policy.windowSeconds);
    bucket.tokens = Math.min(this.policy.maxRequests, bucket.tokens + tokensToAdd);
    bucket.lastRefill = now;

    if (bucket.tokens >= 1) {
      bucket.tokens -= 1;
      return true;
    }
    return false;
  }
}

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter

// Distributed Redis rate limiter adapter
