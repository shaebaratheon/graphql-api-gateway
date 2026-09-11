export interface RequestContext {
  userId?: string;
  roles: string[];
  requestId: string;
  timestamp: number;
  ipAddress: string;
}

export interface ResolverMiddleware {
  (ctx: RequestContext, next: () => Promise<unknown>): Promise<unknown>;
}

export interface RateLimitPolicy {
  windowSeconds: number;
  maxRequests: number;
  keyPrefix: string;
}

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions

// Type expansions
