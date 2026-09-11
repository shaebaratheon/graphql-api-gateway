import * as crypto from 'crypto';
import { RequestContext } from '../types';

export class TokenVerifier {
  private secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  public verify(token: string): Partial<RequestContext> | null {
    if (!token || !token.startsWith('Bearer ')) {
      return null;
    }
    const raw = token.slice(7);
    const parts = raw.split('.');
    if (parts.length !== 3) {
      return null;
    }
    try {
      const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf8'));
      return {
        userId: payload.sub,
        roles: payload.roles || ['USER'],
        timestamp: Date.now(),
      };
    } catch {
      return null;
    }
  }
}

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers

// Authentication token helpers
