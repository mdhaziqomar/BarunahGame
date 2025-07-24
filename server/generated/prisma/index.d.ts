
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model GameAnswer
 * 
 */
export type GameAnswer = $Result.DefaultSelection<Prisma.$GameAnswerPayload>
/**
 * Model Reward
 * 
 */
export type Reward = $Result.DefaultSelection<Prisma.$RewardPayload>
/**
 * Model UserReward
 * 
 */
export type UserReward = $Result.DefaultSelection<Prisma.$UserRewardPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model UserPet
 * 
 */
export type UserPet = $Result.DefaultSelection<Prisma.$UserPetPayload>
/**
 * Model Boss
 * 
 */
export type Boss = $Result.DefaultSelection<Prisma.$BossPayload>
/**
 * Model BossQuestion
 * 
 */
export type BossQuestion = $Result.DefaultSelection<Prisma.$BossQuestionPayload>
/**
 * Model UserStats
 * 
 */
export type UserStats = $Result.DefaultSelection<Prisma.$UserStatsPayload>
/**
 * Model Leaderboard
 * 
 */
export type Leaderboard = $Result.DefaultSelection<Prisma.$LeaderboardPayload>
/**
 * Model SystemSettings
 * 
 */
export type SystemSettings = $Result.DefaultSelection<Prisma.$SystemSettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  STUDENT: 'STUDENT',
  VENDOR: 'VENDOR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const Subject: {
  MELAYU_CULTURE: 'MELAYU_CULTURE',
  ISLAMIC_VALUES: 'ISLAMIC_VALUES',
  BERAJA_SYSTEM: 'BERAJA_SYSTEM',
  BRUNEI_HISTORY: 'BRUNEI_HISTORY',
  GENERAL_MIB: 'GENERAL_MIB'
};

export type Subject = (typeof Subject)[keyof typeof Subject]


export const GameStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  ABANDONED: 'ABANDONED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]


export const RewardStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REDEEMED: 'REDEEMED',
  EXPIRED: 'EXPIRED'
};

export type RewardStatus = (typeof RewardStatus)[keyof typeof RewardStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type Subject = $Enums.Subject

export const Subject: typeof $Enums.Subject

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

export type RewardStatus = $Enums.RewardStatus

export const RewardStatus: typeof $Enums.RewardStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameAnswer`: Exposes CRUD operations for the **GameAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameAnswers
    * const gameAnswers = await prisma.gameAnswer.findMany()
    * ```
    */
  get gameAnswer(): Prisma.GameAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reward`: Exposes CRUD operations for the **Reward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rewards
    * const rewards = await prisma.reward.findMany()
    * ```
    */
  get reward(): Prisma.RewardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userReward`: Exposes CRUD operations for the **UserReward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRewards
    * const userRewards = await prisma.userReward.findMany()
    * ```
    */
  get userReward(): Prisma.UserRewardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPet`: Exposes CRUD operations for the **UserPet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPets
    * const userPets = await prisma.userPet.findMany()
    * ```
    */
  get userPet(): Prisma.UserPetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boss`: Exposes CRUD operations for the **Boss** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bosses
    * const bosses = await prisma.boss.findMany()
    * ```
    */
  get boss(): Prisma.BossDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bossQuestion`: Exposes CRUD operations for the **BossQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BossQuestions
    * const bossQuestions = await prisma.bossQuestion.findMany()
    * ```
    */
  get bossQuestion(): Prisma.BossQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStats`: Exposes CRUD operations for the **UserStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStats
    * const userStats = await prisma.userStats.findMany()
    * ```
    */
  get userStats(): Prisma.UserStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderboard`: Exposes CRUD operations for the **Leaderboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaderboards
    * const leaderboards = await prisma.leaderboard.findMany()
    * ```
    */
  get leaderboard(): Prisma.LeaderboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSettings`: Exposes CRUD operations for the **SystemSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSettings.findMany()
    * ```
    */
  get systemSettings(): Prisma.SystemSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Question: 'Question',
    Game: 'Game',
    GameAnswer: 'GameAnswer',
    Reward: 'Reward',
    UserReward: 'UserReward',
    Pet: 'Pet',
    UserPet: 'UserPet',
    Boss: 'Boss',
    BossQuestion: 'BossQuestion',
    UserStats: 'UserStats',
    Leaderboard: 'Leaderboard',
    SystemSettings: 'SystemSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "question" | "game" | "gameAnswer" | "reward" | "userReward" | "pet" | "userPet" | "boss" | "bossQuestion" | "userStats" | "leaderboard" | "systemSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      GameAnswer: {
        payload: Prisma.$GameAnswerPayload<ExtArgs>
        fields: Prisma.GameAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAnswerPayload>
          }
          findFirst: {
            args: Prisma.GameAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAnswerPayload>
          }
          findMany: {
            args: Prisma.GameAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAnswerPayload>[]
          }
          create: {
            args: Prisma.GameAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAnswerPayload>
          }
          createMany: {
            args: Prisma.GameAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAnswerPayload>[]
          }
          delete: {
            args: Prisma.GameAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAnswerPayload>
          }
          update: {
            args: Prisma.GameAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAnswerPayload>
          }
          deleteMany: {
            args: Prisma.GameAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAnswerPayload>[]
          }
          upsert: {
            args: Prisma.GameAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAnswerPayload>
          }
          aggregate: {
            args: Prisma.GameAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameAnswer>
          }
          groupBy: {
            args: Prisma.GameAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<GameAnswerCountAggregateOutputType> | number
          }
        }
      }
      Reward: {
        payload: Prisma.$RewardPayload<ExtArgs>
        fields: Prisma.RewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findFirst: {
            args: Prisma.RewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findMany: {
            args: Prisma.RewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          create: {
            args: Prisma.RewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          createMany: {
            args: Prisma.RewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          delete: {
            args: Prisma.RewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          update: {
            args: Prisma.RewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          deleteMany: {
            args: Prisma.RewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          upsert: {
            args: Prisma.RewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          aggregate: {
            args: Prisma.RewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReward>
          }
          groupBy: {
            args: Prisma.RewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardCountArgs<ExtArgs>
            result: $Utils.Optional<RewardCountAggregateOutputType> | number
          }
        }
      }
      UserReward: {
        payload: Prisma.$UserRewardPayload<ExtArgs>
        fields: Prisma.UserRewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardPayload>
          }
          findFirst: {
            args: Prisma.UserRewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardPayload>
          }
          findMany: {
            args: Prisma.UserRewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardPayload>[]
          }
          create: {
            args: Prisma.UserRewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardPayload>
          }
          createMany: {
            args: Prisma.UserRewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardPayload>[]
          }
          delete: {
            args: Prisma.UserRewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardPayload>
          }
          update: {
            args: Prisma.UserRewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardPayload>
          }
          deleteMany: {
            args: Prisma.UserRewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardPayload>[]
          }
          upsert: {
            args: Prisma.UserRewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardPayload>
          }
          aggregate: {
            args: Prisma.UserRewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserReward>
          }
          groupBy: {
            args: Prisma.UserRewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRewardCountArgs<ExtArgs>
            result: $Utils.Optional<UserRewardCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      UserPet: {
        payload: Prisma.$UserPetPayload<ExtArgs>
        fields: Prisma.UserPetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetPayload>
          }
          findFirst: {
            args: Prisma.UserPetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetPayload>
          }
          findMany: {
            args: Prisma.UserPetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetPayload>[]
          }
          create: {
            args: Prisma.UserPetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetPayload>
          }
          createMany: {
            args: Prisma.UserPetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetPayload>[]
          }
          delete: {
            args: Prisma.UserPetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetPayload>
          }
          update: {
            args: Prisma.UserPetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetPayload>
          }
          deleteMany: {
            args: Prisma.UserPetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetPayload>[]
          }
          upsert: {
            args: Prisma.UserPetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPetPayload>
          }
          aggregate: {
            args: Prisma.UserPetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPet>
          }
          groupBy: {
            args: Prisma.UserPetGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPetGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPetCountArgs<ExtArgs>
            result: $Utils.Optional<UserPetCountAggregateOutputType> | number
          }
        }
      }
      Boss: {
        payload: Prisma.$BossPayload<ExtArgs>
        fields: Prisma.BossFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BossFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BossFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          findFirst: {
            args: Prisma.BossFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BossFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          findMany: {
            args: Prisma.BossFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>[]
          }
          create: {
            args: Prisma.BossCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          createMany: {
            args: Prisma.BossCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BossCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>[]
          }
          delete: {
            args: Prisma.BossDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          update: {
            args: Prisma.BossUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          deleteMany: {
            args: Prisma.BossDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BossUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BossUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>[]
          }
          upsert: {
            args: Prisma.BossUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossPayload>
          }
          aggregate: {
            args: Prisma.BossAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoss>
          }
          groupBy: {
            args: Prisma.BossGroupByArgs<ExtArgs>
            result: $Utils.Optional<BossGroupByOutputType>[]
          }
          count: {
            args: Prisma.BossCountArgs<ExtArgs>
            result: $Utils.Optional<BossCountAggregateOutputType> | number
          }
        }
      }
      BossQuestion: {
        payload: Prisma.$BossQuestionPayload<ExtArgs>
        fields: Prisma.BossQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BossQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BossQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossQuestionPayload>
          }
          findFirst: {
            args: Prisma.BossQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BossQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossQuestionPayload>
          }
          findMany: {
            args: Prisma.BossQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossQuestionPayload>[]
          }
          create: {
            args: Prisma.BossQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossQuestionPayload>
          }
          createMany: {
            args: Prisma.BossQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BossQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossQuestionPayload>[]
          }
          delete: {
            args: Prisma.BossQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossQuestionPayload>
          }
          update: {
            args: Prisma.BossQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossQuestionPayload>
          }
          deleteMany: {
            args: Prisma.BossQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BossQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BossQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossQuestionPayload>[]
          }
          upsert: {
            args: Prisma.BossQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BossQuestionPayload>
          }
          aggregate: {
            args: Prisma.BossQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBossQuestion>
          }
          groupBy: {
            args: Prisma.BossQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BossQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BossQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<BossQuestionCountAggregateOutputType> | number
          }
        }
      }
      UserStats: {
        payload: Prisma.$UserStatsPayload<ExtArgs>
        fields: Prisma.UserStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findFirst: {
            args: Prisma.UserStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findMany: {
            args: Prisma.UserStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          create: {
            args: Prisma.UserStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          createMany: {
            args: Prisma.UserStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          delete: {
            args: Prisma.UserStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          update: {
            args: Prisma.UserStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          deleteMany: {
            args: Prisma.UserStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          upsert: {
            args: Prisma.UserStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          aggregate: {
            args: Prisma.UserStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStats>
          }
          groupBy: {
            args: Prisma.UserStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStatsCountArgs<ExtArgs>
            result: $Utils.Optional<UserStatsCountAggregateOutputType> | number
          }
        }
      }
      Leaderboard: {
        payload: Prisma.$LeaderboardPayload<ExtArgs>
        fields: Prisma.LeaderboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          findFirst: {
            args: Prisma.LeaderboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          findMany: {
            args: Prisma.LeaderboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>[]
          }
          create: {
            args: Prisma.LeaderboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          createMany: {
            args: Prisma.LeaderboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>[]
          }
          delete: {
            args: Prisma.LeaderboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          update: {
            args: Prisma.LeaderboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          deleteMany: {
            args: Prisma.LeaderboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>[]
          }
          upsert: {
            args: Prisma.LeaderboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          aggregate: {
            args: Prisma.LeaderboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderboard>
          }
          groupBy: {
            args: Prisma.LeaderboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderboardCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardCountAggregateOutputType> | number
          }
        }
      }
      SystemSettings: {
        payload: Prisma.$SystemSettingsPayload<ExtArgs>
        fields: Prisma.SystemSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findMany: {
            args: Prisma.SystemSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          create: {
            args: Prisma.SystemSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          createMany: {
            args: Prisma.SystemSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          update: {
            args: Prisma.SystemSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSettings>
          }
          groupBy: {
            args: Prisma.SystemSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    question?: QuestionOmit
    game?: GameOmit
    gameAnswer?: GameAnswerOmit
    reward?: RewardOmit
    userReward?: UserRewardOmit
    pet?: PetOmit
    userPet?: UserPetOmit
    boss?: BossOmit
    bossQuestion?: BossQuestionOmit
    userStats?: UserStatsOmit
    leaderboard?: LeaderboardOmit
    systemSettings?: SystemSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    games: number
    gameAnswers: number
    userRewards: number
    userPets: number
    vendorRewards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | UserCountOutputTypeCountGamesArgs
    gameAnswers?: boolean | UserCountOutputTypeCountGameAnswersArgs
    userRewards?: boolean | UserCountOutputTypeCountUserRewardsArgs
    userPets?: boolean | UserCountOutputTypeCountUserPetsArgs
    vendorRewards?: boolean | UserCountOutputTypeCountVendorRewardsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameAnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRewardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVendorRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    gameAnswers: number
    bossQuestions: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameAnswers?: boolean | QuestionCountOutputTypeCountGameAnswersArgs
    bossQuestions?: boolean | QuestionCountOutputTypeCountBossQuestionsArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountGameAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameAnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountBossQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BossQuestionWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    gameAnswers: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameAnswers?: boolean | GameCountOutputTypeCountGameAnswersArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameAnswerWhereInput
  }


  /**
   * Count Type RewardCountOutputType
   */

  export type RewardCountOutputType = {
    userRewards: number
  }

  export type RewardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRewards?: boolean | RewardCountOutputTypeCountUserRewardsArgs
  }

  // Custom InputTypes
  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardCountOutputType
     */
    select?: RewardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeCountUserRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRewardWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    userPets: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPets?: boolean | PetCountOutputTypeCountUserPetsArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountUserPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPetWhereInput
  }


  /**
   * Count Type BossCountOutputType
   */

  export type BossCountOutputType = {
    bossQuestions: number
  }

  export type BossCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bossQuestions?: boolean | BossCountOutputTypeCountBossQuestionsArgs
  }

  // Custom InputTypes
  /**
   * BossCountOutputType without action
   */
  export type BossCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossCountOutputType
     */
    select?: BossCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BossCountOutputType without action
   */
  export type BossCountOutputTypeCountBossQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BossQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    knowledgePoints: number | null
    level: number | null
    experience: number | null
  }

  export type UserSumAggregateOutputType = {
    knowledgePoints: number | null
    level: number | null
    experience: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    fullName: string | null
    role: $Enums.UserRole | null
    avatar: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    school: string | null
    grade: string | null
    knowledgePoints: number | null
    level: number | null
    experience: number | null
    businessName: string | null
    businessType: string | null
    contactPhone: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    fullName: string | null
    role: $Enums.UserRole | null
    avatar: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    school: string | null
    grade: string | null
    knowledgePoints: number | null
    level: number | null
    experience: number | null
    businessName: string | null
    businessType: string | null
    contactPhone: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    fullName: number
    role: number
    avatar: number
    isActive: number
    createdAt: number
    updatedAt: number
    school: number
    grade: number
    knowledgePoints: number
    level: number
    experience: number
    businessName: number
    businessType: number
    contactPhone: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    knowledgePoints?: true
    level?: true
    experience?: true
  }

  export type UserSumAggregateInputType = {
    knowledgePoints?: true
    level?: true
    experience?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    fullName?: true
    role?: true
    avatar?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    school?: true
    grade?: true
    knowledgePoints?: true
    level?: true
    experience?: true
    businessName?: true
    businessType?: true
    contactPhone?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    fullName?: true
    role?: true
    avatar?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    school?: true
    grade?: true
    knowledgePoints?: true
    level?: true
    experience?: true
    businessName?: true
    businessType?: true
    contactPhone?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    fullName?: true
    role?: true
    avatar?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    school?: true
    grade?: true
    knowledgePoints?: true
    level?: true
    experience?: true
    businessName?: true
    businessType?: true
    contactPhone?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    fullName: string
    role: $Enums.UserRole
    avatar: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    school: string | null
    grade: string | null
    knowledgePoints: number
    level: number
    experience: number
    businessName: string | null
    businessType: string | null
    contactPhone: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    role?: boolean
    avatar?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean
    grade?: boolean
    knowledgePoints?: boolean
    level?: boolean
    experience?: boolean
    businessName?: boolean
    businessType?: boolean
    contactPhone?: boolean
    games?: boolean | User$gamesArgs<ExtArgs>
    gameAnswers?: boolean | User$gameAnswersArgs<ExtArgs>
    userRewards?: boolean | User$userRewardsArgs<ExtArgs>
    userPets?: boolean | User$userPetsArgs<ExtArgs>
    userStats?: boolean | User$userStatsArgs<ExtArgs>
    vendorRewards?: boolean | User$vendorRewardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    role?: boolean
    avatar?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean
    grade?: boolean
    knowledgePoints?: boolean
    level?: boolean
    experience?: boolean
    businessName?: boolean
    businessType?: boolean
    contactPhone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    role?: boolean
    avatar?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean
    grade?: boolean
    knowledgePoints?: boolean
    level?: boolean
    experience?: boolean
    businessName?: boolean
    businessType?: boolean
    contactPhone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    role?: boolean
    avatar?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean
    grade?: boolean
    knowledgePoints?: boolean
    level?: boolean
    experience?: boolean
    businessName?: boolean
    businessType?: boolean
    contactPhone?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "fullName" | "role" | "avatar" | "isActive" | "createdAt" | "updatedAt" | "school" | "grade" | "knowledgePoints" | "level" | "experience" | "businessName" | "businessType" | "contactPhone", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | User$gamesArgs<ExtArgs>
    gameAnswers?: boolean | User$gameAnswersArgs<ExtArgs>
    userRewards?: boolean | User$userRewardsArgs<ExtArgs>
    userPets?: boolean | User$userPetsArgs<ExtArgs>
    userStats?: boolean | User$userStatsArgs<ExtArgs>
    vendorRewards?: boolean | User$vendorRewardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
      gameAnswers: Prisma.$GameAnswerPayload<ExtArgs>[]
      userRewards: Prisma.$UserRewardPayload<ExtArgs>[]
      userPets: Prisma.$UserPetPayload<ExtArgs>[]
      userStats: Prisma.$UserStatsPayload<ExtArgs> | null
      vendorRewards: Prisma.$RewardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      fullName: string
      role: $Enums.UserRole
      avatar: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      school: string | null
      grade: string | null
      knowledgePoints: number
      level: number
      experience: number
      businessName: string | null
      businessType: string | null
      contactPhone: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends User$gamesArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameAnswers<T extends User$gameAnswersArgs<ExtArgs> = {}>(args?: Subset<T, User$gameAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRewards<T extends User$userRewardsArgs<ExtArgs> = {}>(args?: Subset<T, User$userRewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPets<T extends User$userPetsArgs<ExtArgs> = {}>(args?: Subset<T, User$userPetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userStats<T extends User$userStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$userStatsArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vendorRewards<T extends User$vendorRewardsArgs<ExtArgs> = {}>(args?: Subset<T, User$vendorRewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly school: FieldRef<"User", 'String'>
    readonly grade: FieldRef<"User", 'String'>
    readonly knowledgePoints: FieldRef<"User", 'Int'>
    readonly level: FieldRef<"User", 'Int'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly businessName: FieldRef<"User", 'String'>
    readonly businessType: FieldRef<"User", 'String'>
    readonly contactPhone: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.games
   */
  export type User$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.gameAnswers
   */
  export type User$gameAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    where?: GameAnswerWhereInput
    orderBy?: GameAnswerOrderByWithRelationInput | GameAnswerOrderByWithRelationInput[]
    cursor?: GameAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameAnswerScalarFieldEnum | GameAnswerScalarFieldEnum[]
  }

  /**
   * User.userRewards
   */
  export type User$userRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
    where?: UserRewardWhereInput
    orderBy?: UserRewardOrderByWithRelationInput | UserRewardOrderByWithRelationInput[]
    cursor?: UserRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRewardScalarFieldEnum | UserRewardScalarFieldEnum[]
  }

  /**
   * User.userPets
   */
  export type User$userPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
    where?: UserPetWhereInput
    orderBy?: UserPetOrderByWithRelationInput | UserPetOrderByWithRelationInput[]
    cursor?: UserPetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPetScalarFieldEnum | UserPetScalarFieldEnum[]
  }

  /**
   * User.userStats
   */
  export type User$userStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    where?: UserStatsWhereInput
  }

  /**
   * User.vendorRewards
   */
  export type User$vendorRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    cursor?: RewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    question: string | null
    optionA: string | null
    optionB: string | null
    optionC: string | null
    optionD: string | null
    correctAnswer: string | null
    explanation: string | null
    subject: $Enums.Subject | null
    difficulty: $Enums.Difficulty | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    question: string | null
    optionA: string | null
    optionB: string | null
    optionC: string | null
    optionD: string | null
    correctAnswer: string | null
    explanation: string | null
    subject: $Enums.Subject | null
    difficulty: $Enums.Difficulty | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    question: number
    optionA: number
    optionB: number
    optionC: number
    optionD: number
    correctAnswer: number
    explanation: number
    subject: number
    difficulty: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    question?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctAnswer?: true
    explanation?: true
    subject?: true
    difficulty?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    question?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctAnswer?: true
    explanation?: true
    subject?: true
    difficulty?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    question?: true
    optionA?: true
    optionB?: true
    optionC?: true
    optionD?: true
    correctAnswer?: true
    explanation?: true
    subject?: true
    difficulty?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    question: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctAnswer: string
    explanation: string | null
    subject: $Enums.Subject
    difficulty: $Enums.Difficulty
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    subject?: boolean
    difficulty?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameAnswers?: boolean | Question$gameAnswersArgs<ExtArgs>
    bossQuestions?: boolean | Question$bossQuestionsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    subject?: boolean
    difficulty?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    subject?: boolean
    difficulty?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    question?: boolean
    optionA?: boolean
    optionB?: boolean
    optionC?: boolean
    optionD?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    subject?: boolean
    difficulty?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "optionA" | "optionB" | "optionC" | "optionD" | "correctAnswer" | "explanation" | "subject" | "difficulty" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameAnswers?: boolean | Question$gameAnswersArgs<ExtArgs>
    bossQuestions?: boolean | Question$bossQuestionsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      gameAnswers: Prisma.$GameAnswerPayload<ExtArgs>[]
      bossQuestions: Prisma.$BossQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      optionA: string
      optionB: string
      optionC: string
      optionD: string
      correctAnswer: string
      explanation: string | null
      subject: $Enums.Subject
      difficulty: $Enums.Difficulty
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameAnswers<T extends Question$gameAnswersArgs<ExtArgs> = {}>(args?: Subset<T, Question$gameAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bossQuestions<T extends Question$bossQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$bossQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly question: FieldRef<"Question", 'String'>
    readonly optionA: FieldRef<"Question", 'String'>
    readonly optionB: FieldRef<"Question", 'String'>
    readonly optionC: FieldRef<"Question", 'String'>
    readonly optionD: FieldRef<"Question", 'String'>
    readonly correctAnswer: FieldRef<"Question", 'String'>
    readonly explanation: FieldRef<"Question", 'String'>
    readonly subject: FieldRef<"Question", 'Subject'>
    readonly difficulty: FieldRef<"Question", 'Difficulty'>
    readonly isActive: FieldRef<"Question", 'Boolean'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.gameAnswers
   */
  export type Question$gameAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    where?: GameAnswerWhereInput
    orderBy?: GameAnswerOrderByWithRelationInput | GameAnswerOrderByWithRelationInput[]
    cursor?: GameAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameAnswerScalarFieldEnum | GameAnswerScalarFieldEnum[]
  }

  /**
   * Question.bossQuestions
   */
  export type Question$bossQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
    where?: BossQuestionWhereInput
    orderBy?: BossQuestionOrderByWithRelationInput | BossQuestionOrderByWithRelationInput[]
    cursor?: BossQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BossQuestionScalarFieldEnum | BossQuestionScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    currentQuestion: number | null
    totalQuestions: number | null
    score: number | null
    knowledgePointsEarned: number | null
    bossHp: number | null
    bossMaxHp: number | null
    timerBonus: number | null
    kpMultiplier: number | null
  }

  export type GameSumAggregateOutputType = {
    currentQuestion: number | null
    totalQuestions: number | null
    score: number | null
    knowledgePointsEarned: number | null
    bossHp: number | null
    bossMaxHp: number | null
    timerBonus: number | null
    kpMultiplier: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.GameStatus | null
    difficulty: $Enums.Difficulty | null
    subject: $Enums.Subject | null
    currentQuestion: number | null
    totalQuestions: number | null
    score: number | null
    knowledgePointsEarned: number | null
    timeStarted: Date | null
    timeCompleted: Date | null
    bossDefeated: boolean | null
    bossHp: number | null
    bossMaxHp: number | null
    timerBonus: number | null
    shieldActive: boolean | null
    kpMultiplier: number | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.GameStatus | null
    difficulty: $Enums.Difficulty | null
    subject: $Enums.Subject | null
    currentQuestion: number | null
    totalQuestions: number | null
    score: number | null
    knowledgePointsEarned: number | null
    timeStarted: Date | null
    timeCompleted: Date | null
    bossDefeated: boolean | null
    bossHp: number | null
    bossMaxHp: number | null
    timerBonus: number | null
    shieldActive: boolean | null
    kpMultiplier: number | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    difficulty: number
    subject: number
    currentQuestion: number
    totalQuestions: number
    score: number
    knowledgePointsEarned: number
    timeStarted: number
    timeCompleted: number
    bossDefeated: number
    bossHp: number
    bossMaxHp: number
    timerBonus: number
    shieldActive: number
    kpMultiplier: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    currentQuestion?: true
    totalQuestions?: true
    score?: true
    knowledgePointsEarned?: true
    bossHp?: true
    bossMaxHp?: true
    timerBonus?: true
    kpMultiplier?: true
  }

  export type GameSumAggregateInputType = {
    currentQuestion?: true
    totalQuestions?: true
    score?: true
    knowledgePointsEarned?: true
    bossHp?: true
    bossMaxHp?: true
    timerBonus?: true
    kpMultiplier?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    difficulty?: true
    subject?: true
    currentQuestion?: true
    totalQuestions?: true
    score?: true
    knowledgePointsEarned?: true
    timeStarted?: true
    timeCompleted?: true
    bossDefeated?: true
    bossHp?: true
    bossMaxHp?: true
    timerBonus?: true
    shieldActive?: true
    kpMultiplier?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    difficulty?: true
    subject?: true
    currentQuestion?: true
    totalQuestions?: true
    score?: true
    knowledgePointsEarned?: true
    timeStarted?: true
    timeCompleted?: true
    bossDefeated?: true
    bossHp?: true
    bossMaxHp?: true
    timerBonus?: true
    shieldActive?: true
    kpMultiplier?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    difficulty?: true
    subject?: true
    currentQuestion?: true
    totalQuestions?: true
    score?: true
    knowledgePointsEarned?: true
    timeStarted?: true
    timeCompleted?: true
    bossDefeated?: true
    bossHp?: true
    bossMaxHp?: true
    timerBonus?: true
    shieldActive?: true
    kpMultiplier?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    userId: string
    status: $Enums.GameStatus
    difficulty: $Enums.Difficulty
    subject: $Enums.Subject | null
    currentQuestion: number
    totalQuestions: number
    score: number
    knowledgePointsEarned: number
    timeStarted: Date
    timeCompleted: Date | null
    bossDefeated: boolean
    bossHp: number | null
    bossMaxHp: number | null
    timerBonus: number
    shieldActive: boolean
    kpMultiplier: number
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    difficulty?: boolean
    subject?: boolean
    currentQuestion?: boolean
    totalQuestions?: boolean
    score?: boolean
    knowledgePointsEarned?: boolean
    timeStarted?: boolean
    timeCompleted?: boolean
    bossDefeated?: boolean
    bossHp?: boolean
    bossMaxHp?: boolean
    timerBonus?: boolean
    shieldActive?: boolean
    kpMultiplier?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gameAnswers?: boolean | Game$gameAnswersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    difficulty?: boolean
    subject?: boolean
    currentQuestion?: boolean
    totalQuestions?: boolean
    score?: boolean
    knowledgePointsEarned?: boolean
    timeStarted?: boolean
    timeCompleted?: boolean
    bossDefeated?: boolean
    bossHp?: boolean
    bossMaxHp?: boolean
    timerBonus?: boolean
    shieldActive?: boolean
    kpMultiplier?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    difficulty?: boolean
    subject?: boolean
    currentQuestion?: boolean
    totalQuestions?: boolean
    score?: boolean
    knowledgePointsEarned?: boolean
    timeStarted?: boolean
    timeCompleted?: boolean
    bossDefeated?: boolean
    bossHp?: boolean
    bossMaxHp?: boolean
    timerBonus?: boolean
    shieldActive?: boolean
    kpMultiplier?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    difficulty?: boolean
    subject?: boolean
    currentQuestion?: boolean
    totalQuestions?: boolean
    score?: boolean
    knowledgePointsEarned?: boolean
    timeStarted?: boolean
    timeCompleted?: boolean
    bossDefeated?: boolean
    bossHp?: boolean
    bossMaxHp?: boolean
    timerBonus?: boolean
    shieldActive?: boolean
    kpMultiplier?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "difficulty" | "subject" | "currentQuestion" | "totalQuestions" | "score" | "knowledgePointsEarned" | "timeStarted" | "timeCompleted" | "bossDefeated" | "bossHp" | "bossMaxHp" | "timerBonus" | "shieldActive" | "kpMultiplier", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gameAnswers?: boolean | Game$gameAnswersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      gameAnswers: Prisma.$GameAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: $Enums.GameStatus
      difficulty: $Enums.Difficulty
      subject: $Enums.Subject | null
      currentQuestion: number
      totalQuestions: number
      score: number
      knowledgePointsEarned: number
      timeStarted: Date
      timeCompleted: Date | null
      bossDefeated: boolean
      bossHp: number | null
      bossMaxHp: number | null
      timerBonus: number
      shieldActive: boolean
      kpMultiplier: number
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gameAnswers<T extends Game$gameAnswersArgs<ExtArgs> = {}>(args?: Subset<T, Game$gameAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly userId: FieldRef<"Game", 'String'>
    readonly status: FieldRef<"Game", 'GameStatus'>
    readonly difficulty: FieldRef<"Game", 'Difficulty'>
    readonly subject: FieldRef<"Game", 'Subject'>
    readonly currentQuestion: FieldRef<"Game", 'Int'>
    readonly totalQuestions: FieldRef<"Game", 'Int'>
    readonly score: FieldRef<"Game", 'Int'>
    readonly knowledgePointsEarned: FieldRef<"Game", 'Int'>
    readonly timeStarted: FieldRef<"Game", 'DateTime'>
    readonly timeCompleted: FieldRef<"Game", 'DateTime'>
    readonly bossDefeated: FieldRef<"Game", 'Boolean'>
    readonly bossHp: FieldRef<"Game", 'Int'>
    readonly bossMaxHp: FieldRef<"Game", 'Int'>
    readonly timerBonus: FieldRef<"Game", 'Int'>
    readonly shieldActive: FieldRef<"Game", 'Boolean'>
    readonly kpMultiplier: FieldRef<"Game", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.gameAnswers
   */
  export type Game$gameAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    where?: GameAnswerWhereInput
    orderBy?: GameAnswerOrderByWithRelationInput | GameAnswerOrderByWithRelationInput[]
    cursor?: GameAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameAnswerScalarFieldEnum | GameAnswerScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model GameAnswer
   */

  export type AggregateGameAnswer = {
    _count: GameAnswerCountAggregateOutputType | null
    _avg: GameAnswerAvgAggregateOutputType | null
    _sum: GameAnswerSumAggregateOutputType | null
    _min: GameAnswerMinAggregateOutputType | null
    _max: GameAnswerMaxAggregateOutputType | null
  }

  export type GameAnswerAvgAggregateOutputType = {
    timeSpent: number | null
    knowledgePointsEarned: number | null
  }

  export type GameAnswerSumAggregateOutputType = {
    timeSpent: number | null
    knowledgePointsEarned: number | null
  }

  export type GameAnswerMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    questionId: string | null
    userId: string | null
    selectedAnswer: string | null
    isCorrect: boolean | null
    timeSpent: number | null
    knowledgePointsEarned: number | null
    answeredAt: Date | null
  }

  export type GameAnswerMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    questionId: string | null
    userId: string | null
    selectedAnswer: string | null
    isCorrect: boolean | null
    timeSpent: number | null
    knowledgePointsEarned: number | null
    answeredAt: Date | null
  }

  export type GameAnswerCountAggregateOutputType = {
    id: number
    gameId: number
    questionId: number
    userId: number
    selectedAnswer: number
    isCorrect: number
    timeSpent: number
    knowledgePointsEarned: number
    answeredAt: number
    _all: number
  }


  export type GameAnswerAvgAggregateInputType = {
    timeSpent?: true
    knowledgePointsEarned?: true
  }

  export type GameAnswerSumAggregateInputType = {
    timeSpent?: true
    knowledgePointsEarned?: true
  }

  export type GameAnswerMinAggregateInputType = {
    id?: true
    gameId?: true
    questionId?: true
    userId?: true
    selectedAnswer?: true
    isCorrect?: true
    timeSpent?: true
    knowledgePointsEarned?: true
    answeredAt?: true
  }

  export type GameAnswerMaxAggregateInputType = {
    id?: true
    gameId?: true
    questionId?: true
    userId?: true
    selectedAnswer?: true
    isCorrect?: true
    timeSpent?: true
    knowledgePointsEarned?: true
    answeredAt?: true
  }

  export type GameAnswerCountAggregateInputType = {
    id?: true
    gameId?: true
    questionId?: true
    userId?: true
    selectedAnswer?: true
    isCorrect?: true
    timeSpent?: true
    knowledgePointsEarned?: true
    answeredAt?: true
    _all?: true
  }

  export type GameAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameAnswer to aggregate.
     */
    where?: GameAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameAnswers to fetch.
     */
    orderBy?: GameAnswerOrderByWithRelationInput | GameAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameAnswers
    **/
    _count?: true | GameAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameAnswerMaxAggregateInputType
  }

  export type GetGameAnswerAggregateType<T extends GameAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateGameAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameAnswer[P]>
      : GetScalarType<T[P], AggregateGameAnswer[P]>
  }




  export type GameAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameAnswerWhereInput
    orderBy?: GameAnswerOrderByWithAggregationInput | GameAnswerOrderByWithAggregationInput[]
    by: GameAnswerScalarFieldEnum[] | GameAnswerScalarFieldEnum
    having?: GameAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameAnswerCountAggregateInputType | true
    _avg?: GameAnswerAvgAggregateInputType
    _sum?: GameAnswerSumAggregateInputType
    _min?: GameAnswerMinAggregateInputType
    _max?: GameAnswerMaxAggregateInputType
  }

  export type GameAnswerGroupByOutputType = {
    id: string
    gameId: string
    questionId: string
    userId: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned: number
    answeredAt: Date
    _count: GameAnswerCountAggregateOutputType | null
    _avg: GameAnswerAvgAggregateOutputType | null
    _sum: GameAnswerSumAggregateOutputType | null
    _min: GameAnswerMinAggregateOutputType | null
    _max: GameAnswerMaxAggregateOutputType | null
  }

  type GetGameAnswerGroupByPayload<T extends GameAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], GameAnswerGroupByOutputType[P]>
        }
      >
    >


  export type GameAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    questionId?: boolean
    userId?: boolean
    selectedAnswer?: boolean
    isCorrect?: boolean
    timeSpent?: boolean
    knowledgePointsEarned?: boolean
    answeredAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameAnswer"]>

  export type GameAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    questionId?: boolean
    userId?: boolean
    selectedAnswer?: boolean
    isCorrect?: boolean
    timeSpent?: boolean
    knowledgePointsEarned?: boolean
    answeredAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameAnswer"]>

  export type GameAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    questionId?: boolean
    userId?: boolean
    selectedAnswer?: boolean
    isCorrect?: boolean
    timeSpent?: boolean
    knowledgePointsEarned?: boolean
    answeredAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameAnswer"]>

  export type GameAnswerSelectScalar = {
    id?: boolean
    gameId?: boolean
    questionId?: boolean
    userId?: boolean
    selectedAnswer?: boolean
    isCorrect?: boolean
    timeSpent?: boolean
    knowledgePointsEarned?: boolean
    answeredAt?: boolean
  }

  export type GameAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "questionId" | "userId" | "selectedAnswer" | "isCorrect" | "timeSpent" | "knowledgePointsEarned" | "answeredAt", ExtArgs["result"]["gameAnswer"]>
  export type GameAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GameAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameAnswer"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      questionId: string
      userId: string
      selectedAnswer: string
      isCorrect: boolean
      timeSpent: number
      knowledgePointsEarned: number
      answeredAt: Date
    }, ExtArgs["result"]["gameAnswer"]>
    composites: {}
  }

  type GameAnswerGetPayload<S extends boolean | null | undefined | GameAnswerDefaultArgs> = $Result.GetResult<Prisma.$GameAnswerPayload, S>

  type GameAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameAnswerCountAggregateInputType | true
    }

  export interface GameAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameAnswer'], meta: { name: 'GameAnswer' } }
    /**
     * Find zero or one GameAnswer that matches the filter.
     * @param {GameAnswerFindUniqueArgs} args - Arguments to find a GameAnswer
     * @example
     * // Get one GameAnswer
     * const gameAnswer = await prisma.gameAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameAnswerFindUniqueArgs>(args: SelectSubset<T, GameAnswerFindUniqueArgs<ExtArgs>>): Prisma__GameAnswerClient<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameAnswerFindUniqueOrThrowArgs} args - Arguments to find a GameAnswer
     * @example
     * // Get one GameAnswer
     * const gameAnswer = await prisma.gameAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, GameAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameAnswerClient<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAnswerFindFirstArgs} args - Arguments to find a GameAnswer
     * @example
     * // Get one GameAnswer
     * const gameAnswer = await prisma.gameAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameAnswerFindFirstArgs>(args?: SelectSubset<T, GameAnswerFindFirstArgs<ExtArgs>>): Prisma__GameAnswerClient<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAnswerFindFirstOrThrowArgs} args - Arguments to find a GameAnswer
     * @example
     * // Get one GameAnswer
     * const gameAnswer = await prisma.gameAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, GameAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameAnswerClient<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameAnswers
     * const gameAnswers = await prisma.gameAnswer.findMany()
     * 
     * // Get first 10 GameAnswers
     * const gameAnswers = await prisma.gameAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameAnswerWithIdOnly = await prisma.gameAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameAnswerFindManyArgs>(args?: SelectSubset<T, GameAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameAnswer.
     * @param {GameAnswerCreateArgs} args - Arguments to create a GameAnswer.
     * @example
     * // Create one GameAnswer
     * const GameAnswer = await prisma.gameAnswer.create({
     *   data: {
     *     // ... data to create a GameAnswer
     *   }
     * })
     * 
     */
    create<T extends GameAnswerCreateArgs>(args: SelectSubset<T, GameAnswerCreateArgs<ExtArgs>>): Prisma__GameAnswerClient<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameAnswers.
     * @param {GameAnswerCreateManyArgs} args - Arguments to create many GameAnswers.
     * @example
     * // Create many GameAnswers
     * const gameAnswer = await prisma.gameAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameAnswerCreateManyArgs>(args?: SelectSubset<T, GameAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameAnswers and returns the data saved in the database.
     * @param {GameAnswerCreateManyAndReturnArgs} args - Arguments to create many GameAnswers.
     * @example
     * // Create many GameAnswers
     * const gameAnswer = await prisma.gameAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameAnswers and only return the `id`
     * const gameAnswerWithIdOnly = await prisma.gameAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, GameAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameAnswer.
     * @param {GameAnswerDeleteArgs} args - Arguments to delete one GameAnswer.
     * @example
     * // Delete one GameAnswer
     * const GameAnswer = await prisma.gameAnswer.delete({
     *   where: {
     *     // ... filter to delete one GameAnswer
     *   }
     * })
     * 
     */
    delete<T extends GameAnswerDeleteArgs>(args: SelectSubset<T, GameAnswerDeleteArgs<ExtArgs>>): Prisma__GameAnswerClient<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameAnswer.
     * @param {GameAnswerUpdateArgs} args - Arguments to update one GameAnswer.
     * @example
     * // Update one GameAnswer
     * const gameAnswer = await prisma.gameAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameAnswerUpdateArgs>(args: SelectSubset<T, GameAnswerUpdateArgs<ExtArgs>>): Prisma__GameAnswerClient<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameAnswers.
     * @param {GameAnswerDeleteManyArgs} args - Arguments to filter GameAnswers to delete.
     * @example
     * // Delete a few GameAnswers
     * const { count } = await prisma.gameAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameAnswerDeleteManyArgs>(args?: SelectSubset<T, GameAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameAnswers
     * const gameAnswer = await prisma.gameAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameAnswerUpdateManyArgs>(args: SelectSubset<T, GameAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameAnswers and returns the data updated in the database.
     * @param {GameAnswerUpdateManyAndReturnArgs} args - Arguments to update many GameAnswers.
     * @example
     * // Update many GameAnswers
     * const gameAnswer = await prisma.gameAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameAnswers and only return the `id`
     * const gameAnswerWithIdOnly = await prisma.gameAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, GameAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameAnswer.
     * @param {GameAnswerUpsertArgs} args - Arguments to update or create a GameAnswer.
     * @example
     * // Update or create a GameAnswer
     * const gameAnswer = await prisma.gameAnswer.upsert({
     *   create: {
     *     // ... data to create a GameAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameAnswer we want to update
     *   }
     * })
     */
    upsert<T extends GameAnswerUpsertArgs>(args: SelectSubset<T, GameAnswerUpsertArgs<ExtArgs>>): Prisma__GameAnswerClient<$Result.GetResult<Prisma.$GameAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAnswerCountArgs} args - Arguments to filter GameAnswers to count.
     * @example
     * // Count the number of GameAnswers
     * const count = await prisma.gameAnswer.count({
     *   where: {
     *     // ... the filter for the GameAnswers we want to count
     *   }
     * })
    **/
    count<T extends GameAnswerCountArgs>(
      args?: Subset<T, GameAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAnswerAggregateArgs>(args: Subset<T, GameAnswerAggregateArgs>): Prisma.PrismaPromise<GetGameAnswerAggregateType<T>>

    /**
     * Group by GameAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameAnswerGroupByArgs['orderBy'] }
        : { orderBy?: GameAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameAnswer model
   */
  readonly fields: GameAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameAnswer model
   */
  interface GameAnswerFieldRefs {
    readonly id: FieldRef<"GameAnswer", 'String'>
    readonly gameId: FieldRef<"GameAnswer", 'String'>
    readonly questionId: FieldRef<"GameAnswer", 'String'>
    readonly userId: FieldRef<"GameAnswer", 'String'>
    readonly selectedAnswer: FieldRef<"GameAnswer", 'String'>
    readonly isCorrect: FieldRef<"GameAnswer", 'Boolean'>
    readonly timeSpent: FieldRef<"GameAnswer", 'Int'>
    readonly knowledgePointsEarned: FieldRef<"GameAnswer", 'Int'>
    readonly answeredAt: FieldRef<"GameAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameAnswer findUnique
   */
  export type GameAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    /**
     * Filter, which GameAnswer to fetch.
     */
    where: GameAnswerWhereUniqueInput
  }

  /**
   * GameAnswer findUniqueOrThrow
   */
  export type GameAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    /**
     * Filter, which GameAnswer to fetch.
     */
    where: GameAnswerWhereUniqueInput
  }

  /**
   * GameAnswer findFirst
   */
  export type GameAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    /**
     * Filter, which GameAnswer to fetch.
     */
    where?: GameAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameAnswers to fetch.
     */
    orderBy?: GameAnswerOrderByWithRelationInput | GameAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameAnswers.
     */
    cursor?: GameAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameAnswers.
     */
    distinct?: GameAnswerScalarFieldEnum | GameAnswerScalarFieldEnum[]
  }

  /**
   * GameAnswer findFirstOrThrow
   */
  export type GameAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    /**
     * Filter, which GameAnswer to fetch.
     */
    where?: GameAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameAnswers to fetch.
     */
    orderBy?: GameAnswerOrderByWithRelationInput | GameAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameAnswers.
     */
    cursor?: GameAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameAnswers.
     */
    distinct?: GameAnswerScalarFieldEnum | GameAnswerScalarFieldEnum[]
  }

  /**
   * GameAnswer findMany
   */
  export type GameAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    /**
     * Filter, which GameAnswers to fetch.
     */
    where?: GameAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameAnswers to fetch.
     */
    orderBy?: GameAnswerOrderByWithRelationInput | GameAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameAnswers.
     */
    cursor?: GameAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameAnswers.
     */
    skip?: number
    distinct?: GameAnswerScalarFieldEnum | GameAnswerScalarFieldEnum[]
  }

  /**
   * GameAnswer create
   */
  export type GameAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a GameAnswer.
     */
    data: XOR<GameAnswerCreateInput, GameAnswerUncheckedCreateInput>
  }

  /**
   * GameAnswer createMany
   */
  export type GameAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameAnswers.
     */
    data: GameAnswerCreateManyInput | GameAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameAnswer createManyAndReturn
   */
  export type GameAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many GameAnswers.
     */
    data: GameAnswerCreateManyInput | GameAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameAnswer update
   */
  export type GameAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a GameAnswer.
     */
    data: XOR<GameAnswerUpdateInput, GameAnswerUncheckedUpdateInput>
    /**
     * Choose, which GameAnswer to update.
     */
    where: GameAnswerWhereUniqueInput
  }

  /**
   * GameAnswer updateMany
   */
  export type GameAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameAnswers.
     */
    data: XOR<GameAnswerUpdateManyMutationInput, GameAnswerUncheckedUpdateManyInput>
    /**
     * Filter which GameAnswers to update
     */
    where?: GameAnswerWhereInput
    /**
     * Limit how many GameAnswers to update.
     */
    limit?: number
  }

  /**
   * GameAnswer updateManyAndReturn
   */
  export type GameAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * The data used to update GameAnswers.
     */
    data: XOR<GameAnswerUpdateManyMutationInput, GameAnswerUncheckedUpdateManyInput>
    /**
     * Filter which GameAnswers to update
     */
    where?: GameAnswerWhereInput
    /**
     * Limit how many GameAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameAnswer upsert
   */
  export type GameAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the GameAnswer to update in case it exists.
     */
    where: GameAnswerWhereUniqueInput
    /**
     * In case the GameAnswer found by the `where` argument doesn't exist, create a new GameAnswer with this data.
     */
    create: XOR<GameAnswerCreateInput, GameAnswerUncheckedCreateInput>
    /**
     * In case the GameAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameAnswerUpdateInput, GameAnswerUncheckedUpdateInput>
  }

  /**
   * GameAnswer delete
   */
  export type GameAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
    /**
     * Filter which GameAnswer to delete.
     */
    where: GameAnswerWhereUniqueInput
  }

  /**
   * GameAnswer deleteMany
   */
  export type GameAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameAnswers to delete
     */
    where?: GameAnswerWhereInput
    /**
     * Limit how many GameAnswers to delete.
     */
    limit?: number
  }

  /**
   * GameAnswer without action
   */
  export type GameAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAnswer
     */
    select?: GameAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAnswer
     */
    omit?: GameAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAnswerInclude<ExtArgs> | null
  }


  /**
   * Model Reward
   */

  export type AggregateReward = {
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  export type RewardAvgAggregateOutputType = {
    knowledgePointsCost: number | null
    stockQuantity: number | null
  }

  export type RewardSumAggregateOutputType = {
    knowledgePointsCost: number | null
    stockQuantity: number | null
  }

  export type RewardMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    knowledgePointsCost: number | null
    imageUrl: string | null
    category: string | null
    isActive: boolean | null
    stockQuantity: number | null
    vendorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    knowledgePointsCost: number | null
    imageUrl: string | null
    category: string | null
    isActive: boolean | null
    stockQuantity: number | null
    vendorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardCountAggregateOutputType = {
    id: number
    title: number
    description: number
    knowledgePointsCost: number
    imageUrl: number
    category: number
    isActive: number
    stockQuantity: number
    vendorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RewardAvgAggregateInputType = {
    knowledgePointsCost?: true
    stockQuantity?: true
  }

  export type RewardSumAggregateInputType = {
    knowledgePointsCost?: true
    stockQuantity?: true
  }

  export type RewardMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    knowledgePointsCost?: true
    imageUrl?: true
    category?: true
    isActive?: true
    stockQuantity?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    knowledgePointsCost?: true
    imageUrl?: true
    category?: true
    isActive?: true
    stockQuantity?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    knowledgePointsCost?: true
    imageUrl?: true
    category?: true
    isActive?: true
    stockQuantity?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reward to aggregate.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rewards
    **/
    _count?: true | RewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardMaxAggregateInputType
  }

  export type GetRewardAggregateType<T extends RewardAggregateArgs> = {
        [P in keyof T & keyof AggregateReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReward[P]>
      : GetScalarType<T[P], AggregateReward[P]>
  }




  export type RewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithAggregationInput | RewardOrderByWithAggregationInput[]
    by: RewardScalarFieldEnum[] | RewardScalarFieldEnum
    having?: RewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardCountAggregateInputType | true
    _avg?: RewardAvgAggregateInputType
    _sum?: RewardSumAggregateInputType
    _min?: RewardMinAggregateInputType
    _max?: RewardMaxAggregateInputType
  }

  export type RewardGroupByOutputType = {
    id: string
    title: string
    description: string
    knowledgePointsCost: number
    imageUrl: string | null
    category: string
    isActive: boolean
    stockQuantity: number
    vendorId: string
    createdAt: Date
    updatedAt: Date
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  type GetRewardGroupByPayload<T extends RewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardGroupByOutputType[P]>
            : GetScalarType<T[P], RewardGroupByOutputType[P]>
        }
      >
    >


  export type RewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    knowledgePointsCost?: boolean
    imageUrl?: boolean
    category?: boolean
    isActive?: boolean
    stockQuantity?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    userRewards?: boolean | Reward$userRewardsArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    knowledgePointsCost?: boolean
    imageUrl?: boolean
    category?: boolean
    isActive?: boolean
    stockQuantity?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    knowledgePointsCost?: boolean
    imageUrl?: boolean
    category?: boolean
    isActive?: boolean
    stockQuantity?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    knowledgePointsCost?: boolean
    imageUrl?: boolean
    category?: boolean
    isActive?: boolean
    stockQuantity?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "knowledgePointsCost" | "imageUrl" | "category" | "isActive" | "stockQuantity" | "vendorId" | "createdAt" | "updatedAt", ExtArgs["result"]["reward"]>
  export type RewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    userRewards?: boolean | Reward$userRewardsArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reward"
    objects: {
      vendor: Prisma.$UserPayload<ExtArgs>
      userRewards: Prisma.$UserRewardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      knowledgePointsCost: number
      imageUrl: string | null
      category: string
      isActive: boolean
      stockQuantity: number
      vendorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reward"]>
    composites: {}
  }

  type RewardGetPayload<S extends boolean | null | undefined | RewardDefaultArgs> = $Result.GetResult<Prisma.$RewardPayload, S>

  type RewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardCountAggregateInputType | true
    }

  export interface RewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reward'], meta: { name: 'Reward' } }
    /**
     * Find zero or one Reward that matches the filter.
     * @param {RewardFindUniqueArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardFindUniqueArgs>(args: SelectSubset<T, RewardFindUniqueArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardFindUniqueOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardFindFirstArgs>(args?: SelectSubset<T, RewardFindFirstArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rewards
     * const rewards = await prisma.reward.findMany()
     * 
     * // Get first 10 Rewards
     * const rewards = await prisma.reward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardWithIdOnly = await prisma.reward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardFindManyArgs>(args?: SelectSubset<T, RewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reward.
     * @param {RewardCreateArgs} args - Arguments to create a Reward.
     * @example
     * // Create one Reward
     * const Reward = await prisma.reward.create({
     *   data: {
     *     // ... data to create a Reward
     *   }
     * })
     * 
     */
    create<T extends RewardCreateArgs>(args: SelectSubset<T, RewardCreateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rewards.
     * @param {RewardCreateManyArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardCreateManyArgs>(args?: SelectSubset<T, RewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rewards and returns the data saved in the database.
     * @param {RewardCreateManyAndReturnArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reward.
     * @param {RewardDeleteArgs} args - Arguments to delete one Reward.
     * @example
     * // Delete one Reward
     * const Reward = await prisma.reward.delete({
     *   where: {
     *     // ... filter to delete one Reward
     *   }
     * })
     * 
     */
    delete<T extends RewardDeleteArgs>(args: SelectSubset<T, RewardDeleteArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reward.
     * @param {RewardUpdateArgs} args - Arguments to update one Reward.
     * @example
     * // Update one Reward
     * const reward = await prisma.reward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardUpdateArgs>(args: SelectSubset<T, RewardUpdateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rewards.
     * @param {RewardDeleteManyArgs} args - Arguments to filter Rewards to delete.
     * @example
     * // Delete a few Rewards
     * const { count } = await prisma.reward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardDeleteManyArgs>(args?: SelectSubset<T, RewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardUpdateManyArgs>(args: SelectSubset<T, RewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards and returns the data updated in the database.
     * @param {RewardUpdateManyAndReturnArgs} args - Arguments to update many Rewards.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RewardUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reward.
     * @param {RewardUpsertArgs} args - Arguments to update or create a Reward.
     * @example
     * // Update or create a Reward
     * const reward = await prisma.reward.upsert({
     *   create: {
     *     // ... data to create a Reward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reward we want to update
     *   }
     * })
     */
    upsert<T extends RewardUpsertArgs>(args: SelectSubset<T, RewardUpsertArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardCountArgs} args - Arguments to filter Rewards to count.
     * @example
     * // Count the number of Rewards
     * const count = await prisma.reward.count({
     *   where: {
     *     // ... the filter for the Rewards we want to count
     *   }
     * })
    **/
    count<T extends RewardCountArgs>(
      args?: Subset<T, RewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RewardAggregateArgs>(args: Subset<T, RewardAggregateArgs>): Prisma.PrismaPromise<GetRewardAggregateType<T>>

    /**
     * Group by Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardGroupByArgs['orderBy'] }
        : { orderBy?: RewardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reward model
   */
  readonly fields: RewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userRewards<T extends Reward$userRewardsArgs<ExtArgs> = {}>(args?: Subset<T, Reward$userRewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reward model
   */
  interface RewardFieldRefs {
    readonly id: FieldRef<"Reward", 'String'>
    readonly title: FieldRef<"Reward", 'String'>
    readonly description: FieldRef<"Reward", 'String'>
    readonly knowledgePointsCost: FieldRef<"Reward", 'Int'>
    readonly imageUrl: FieldRef<"Reward", 'String'>
    readonly category: FieldRef<"Reward", 'String'>
    readonly isActive: FieldRef<"Reward", 'Boolean'>
    readonly stockQuantity: FieldRef<"Reward", 'Int'>
    readonly vendorId: FieldRef<"Reward", 'String'>
    readonly createdAt: FieldRef<"Reward", 'DateTime'>
    readonly updatedAt: FieldRef<"Reward", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reward findUnique
   */
  export type RewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findUniqueOrThrow
   */
  export type RewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findFirst
   */
  export type RewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findFirstOrThrow
   */
  export type RewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findMany
   */
  export type RewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward create
   */
  export type RewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to create a Reward.
     */
    data: XOR<RewardCreateInput, RewardUncheckedCreateInput>
  }

  /**
   * Reward createMany
   */
  export type RewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward createManyAndReturn
   */
  export type RewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reward update
   */
  export type RewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to update a Reward.
     */
    data: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
    /**
     * Choose, which Reward to update.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward updateMany
   */
  export type RewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Reward updateManyAndReturn
   */
  export type RewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reward upsert
   */
  export type RewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The filter to search for the Reward to update in case it exists.
     */
    where: RewardWhereUniqueInput
    /**
     * In case the Reward found by the `where` argument doesn't exist, create a new Reward with this data.
     */
    create: XOR<RewardCreateInput, RewardUncheckedCreateInput>
    /**
     * In case the Reward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
  }

  /**
   * Reward delete
   */
  export type RewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter which Reward to delete.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward deleteMany
   */
  export type RewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to delete
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to delete.
     */
    limit?: number
  }

  /**
   * Reward.userRewards
   */
  export type Reward$userRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
    where?: UserRewardWhereInput
    orderBy?: UserRewardOrderByWithRelationInput | UserRewardOrderByWithRelationInput[]
    cursor?: UserRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRewardScalarFieldEnum | UserRewardScalarFieldEnum[]
  }

  /**
   * Reward without action
   */
  export type RewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
  }


  /**
   * Model UserReward
   */

  export type AggregateUserReward = {
    _count: UserRewardCountAggregateOutputType | null
    _min: UserRewardMinAggregateOutputType | null
    _max: UserRewardMaxAggregateOutputType | null
  }

  export type UserRewardMinAggregateOutputType = {
    id: string | null
    userId: string | null
    rewardId: string | null
    status: $Enums.RewardStatus | null
    qrCode: string | null
    redeemedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserRewardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    rewardId: string | null
    status: $Enums.RewardStatus | null
    qrCode: string | null
    redeemedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserRewardCountAggregateOutputType = {
    id: number
    userId: number
    rewardId: number
    status: number
    qrCode: number
    redeemedAt: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type UserRewardMinAggregateInputType = {
    id?: true
    userId?: true
    rewardId?: true
    status?: true
    qrCode?: true
    redeemedAt?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserRewardMaxAggregateInputType = {
    id?: true
    userId?: true
    rewardId?: true
    status?: true
    qrCode?: true
    redeemedAt?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserRewardCountAggregateInputType = {
    id?: true
    userId?: true
    rewardId?: true
    status?: true
    qrCode?: true
    redeemedAt?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserRewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReward to aggregate.
     */
    where?: UserRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRewards to fetch.
     */
    orderBy?: UserRewardOrderByWithRelationInput | UserRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRewards
    **/
    _count?: true | UserRewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRewardMaxAggregateInputType
  }

  export type GetUserRewardAggregateType<T extends UserRewardAggregateArgs> = {
        [P in keyof T & keyof AggregateUserReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserReward[P]>
      : GetScalarType<T[P], AggregateUserReward[P]>
  }




  export type UserRewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRewardWhereInput
    orderBy?: UserRewardOrderByWithAggregationInput | UserRewardOrderByWithAggregationInput[]
    by: UserRewardScalarFieldEnum[] | UserRewardScalarFieldEnum
    having?: UserRewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRewardCountAggregateInputType | true
    _min?: UserRewardMinAggregateInputType
    _max?: UserRewardMaxAggregateInputType
  }

  export type UserRewardGroupByOutputType = {
    id: string
    userId: string
    rewardId: string
    status: $Enums.RewardStatus
    qrCode: string | null
    redeemedAt: Date | null
    expiresAt: Date | null
    createdAt: Date
    _count: UserRewardCountAggregateOutputType | null
    _min: UserRewardMinAggregateOutputType | null
    _max: UserRewardMaxAggregateOutputType | null
  }

  type GetUserRewardGroupByPayload<T extends UserRewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRewardGroupByOutputType[P]>
            : GetScalarType<T[P], UserRewardGroupByOutputType[P]>
        }
      >
    >


  export type UserRewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    status?: boolean
    qrCode?: boolean
    redeemedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReward"]>

  export type UserRewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    status?: boolean
    qrCode?: boolean
    redeemedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReward"]>

  export type UserRewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    status?: boolean
    qrCode?: boolean
    redeemedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReward"]>

  export type UserRewardSelectScalar = {
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    status?: boolean
    qrCode?: boolean
    redeemedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type UserRewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rewardId" | "status" | "qrCode" | "redeemedAt" | "expiresAt" | "createdAt", ExtArgs["result"]["userReward"]>
  export type UserRewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }
  export type UserRewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }
  export type UserRewardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }

  export type $UserRewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserReward"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reward: Prisma.$RewardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      rewardId: string
      status: $Enums.RewardStatus
      qrCode: string | null
      redeemedAt: Date | null
      expiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["userReward"]>
    composites: {}
  }

  type UserRewardGetPayload<S extends boolean | null | undefined | UserRewardDefaultArgs> = $Result.GetResult<Prisma.$UserRewardPayload, S>

  type UserRewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRewardCountAggregateInputType | true
    }

  export interface UserRewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserReward'], meta: { name: 'UserReward' } }
    /**
     * Find zero or one UserReward that matches the filter.
     * @param {UserRewardFindUniqueArgs} args - Arguments to find a UserReward
     * @example
     * // Get one UserReward
     * const userReward = await prisma.userReward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRewardFindUniqueArgs>(args: SelectSubset<T, UserRewardFindUniqueArgs<ExtArgs>>): Prisma__UserRewardClient<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserReward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRewardFindUniqueOrThrowArgs} args - Arguments to find a UserReward
     * @example
     * // Get one UserReward
     * const userReward = await prisma.userReward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRewardFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRewardClient<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardFindFirstArgs} args - Arguments to find a UserReward
     * @example
     * // Get one UserReward
     * const userReward = await prisma.userReward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRewardFindFirstArgs>(args?: SelectSubset<T, UserRewardFindFirstArgs<ExtArgs>>): Prisma__UserRewardClient<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardFindFirstOrThrowArgs} args - Arguments to find a UserReward
     * @example
     * // Get one UserReward
     * const userReward = await prisma.userReward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRewardFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRewardClient<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRewards
     * const userRewards = await prisma.userReward.findMany()
     * 
     * // Get first 10 UserRewards
     * const userRewards = await prisma.userReward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRewardWithIdOnly = await prisma.userReward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRewardFindManyArgs>(args?: SelectSubset<T, UserRewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserReward.
     * @param {UserRewardCreateArgs} args - Arguments to create a UserReward.
     * @example
     * // Create one UserReward
     * const UserReward = await prisma.userReward.create({
     *   data: {
     *     // ... data to create a UserReward
     *   }
     * })
     * 
     */
    create<T extends UserRewardCreateArgs>(args: SelectSubset<T, UserRewardCreateArgs<ExtArgs>>): Prisma__UserRewardClient<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRewards.
     * @param {UserRewardCreateManyArgs} args - Arguments to create many UserRewards.
     * @example
     * // Create many UserRewards
     * const userReward = await prisma.userReward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRewardCreateManyArgs>(args?: SelectSubset<T, UserRewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRewards and returns the data saved in the database.
     * @param {UserRewardCreateManyAndReturnArgs} args - Arguments to create many UserRewards.
     * @example
     * // Create many UserRewards
     * const userReward = await prisma.userReward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRewards and only return the `id`
     * const userRewardWithIdOnly = await prisma.userReward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRewardCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserReward.
     * @param {UserRewardDeleteArgs} args - Arguments to delete one UserReward.
     * @example
     * // Delete one UserReward
     * const UserReward = await prisma.userReward.delete({
     *   where: {
     *     // ... filter to delete one UserReward
     *   }
     * })
     * 
     */
    delete<T extends UserRewardDeleteArgs>(args: SelectSubset<T, UserRewardDeleteArgs<ExtArgs>>): Prisma__UserRewardClient<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserReward.
     * @param {UserRewardUpdateArgs} args - Arguments to update one UserReward.
     * @example
     * // Update one UserReward
     * const userReward = await prisma.userReward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRewardUpdateArgs>(args: SelectSubset<T, UserRewardUpdateArgs<ExtArgs>>): Prisma__UserRewardClient<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRewards.
     * @param {UserRewardDeleteManyArgs} args - Arguments to filter UserRewards to delete.
     * @example
     * // Delete a few UserRewards
     * const { count } = await prisma.userReward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRewardDeleteManyArgs>(args?: SelectSubset<T, UserRewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRewards
     * const userReward = await prisma.userReward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRewardUpdateManyArgs>(args: SelectSubset<T, UserRewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRewards and returns the data updated in the database.
     * @param {UserRewardUpdateManyAndReturnArgs} args - Arguments to update many UserRewards.
     * @example
     * // Update many UserRewards
     * const userReward = await prisma.userReward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRewards and only return the `id`
     * const userRewardWithIdOnly = await prisma.userReward.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRewardUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserReward.
     * @param {UserRewardUpsertArgs} args - Arguments to update or create a UserReward.
     * @example
     * // Update or create a UserReward
     * const userReward = await prisma.userReward.upsert({
     *   create: {
     *     // ... data to create a UserReward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserReward we want to update
     *   }
     * })
     */
    upsert<T extends UserRewardUpsertArgs>(args: SelectSubset<T, UserRewardUpsertArgs<ExtArgs>>): Prisma__UserRewardClient<$Result.GetResult<Prisma.$UserRewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardCountArgs} args - Arguments to filter UserRewards to count.
     * @example
     * // Count the number of UserRewards
     * const count = await prisma.userReward.count({
     *   where: {
     *     // ... the filter for the UserRewards we want to count
     *   }
     * })
    **/
    count<T extends UserRewardCountArgs>(
      args?: Subset<T, UserRewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRewardAggregateArgs>(args: Subset<T, UserRewardAggregateArgs>): Prisma.PrismaPromise<GetUserRewardAggregateType<T>>

    /**
     * Group by UserReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRewardGroupByArgs['orderBy'] }
        : { orderBy?: UserRewardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserReward model
   */
  readonly fields: UserRewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserReward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reward<T extends RewardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RewardDefaultArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserReward model
   */
  interface UserRewardFieldRefs {
    readonly id: FieldRef<"UserReward", 'String'>
    readonly userId: FieldRef<"UserReward", 'String'>
    readonly rewardId: FieldRef<"UserReward", 'String'>
    readonly status: FieldRef<"UserReward", 'RewardStatus'>
    readonly qrCode: FieldRef<"UserReward", 'String'>
    readonly redeemedAt: FieldRef<"UserReward", 'DateTime'>
    readonly expiresAt: FieldRef<"UserReward", 'DateTime'>
    readonly createdAt: FieldRef<"UserReward", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserReward findUnique
   */
  export type UserRewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
    /**
     * Filter, which UserReward to fetch.
     */
    where: UserRewardWhereUniqueInput
  }

  /**
   * UserReward findUniqueOrThrow
   */
  export type UserRewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
    /**
     * Filter, which UserReward to fetch.
     */
    where: UserRewardWhereUniqueInput
  }

  /**
   * UserReward findFirst
   */
  export type UserRewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
    /**
     * Filter, which UserReward to fetch.
     */
    where?: UserRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRewards to fetch.
     */
    orderBy?: UserRewardOrderByWithRelationInput | UserRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRewards.
     */
    cursor?: UserRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRewards.
     */
    distinct?: UserRewardScalarFieldEnum | UserRewardScalarFieldEnum[]
  }

  /**
   * UserReward findFirstOrThrow
   */
  export type UserRewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
    /**
     * Filter, which UserReward to fetch.
     */
    where?: UserRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRewards to fetch.
     */
    orderBy?: UserRewardOrderByWithRelationInput | UserRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRewards.
     */
    cursor?: UserRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRewards.
     */
    distinct?: UserRewardScalarFieldEnum | UserRewardScalarFieldEnum[]
  }

  /**
   * UserReward findMany
   */
  export type UserRewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
    /**
     * Filter, which UserRewards to fetch.
     */
    where?: UserRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRewards to fetch.
     */
    orderBy?: UserRewardOrderByWithRelationInput | UserRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRewards.
     */
    cursor?: UserRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRewards.
     */
    skip?: number
    distinct?: UserRewardScalarFieldEnum | UserRewardScalarFieldEnum[]
  }

  /**
   * UserReward create
   */
  export type UserRewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
    /**
     * The data needed to create a UserReward.
     */
    data: XOR<UserRewardCreateInput, UserRewardUncheckedCreateInput>
  }

  /**
   * UserReward createMany
   */
  export type UserRewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRewards.
     */
    data: UserRewardCreateManyInput | UserRewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserReward createManyAndReturn
   */
  export type UserRewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * The data used to create many UserRewards.
     */
    data: UserRewardCreateManyInput | UserRewardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserReward update
   */
  export type UserRewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
    /**
     * The data needed to update a UserReward.
     */
    data: XOR<UserRewardUpdateInput, UserRewardUncheckedUpdateInput>
    /**
     * Choose, which UserReward to update.
     */
    where: UserRewardWhereUniqueInput
  }

  /**
   * UserReward updateMany
   */
  export type UserRewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRewards.
     */
    data: XOR<UserRewardUpdateManyMutationInput, UserRewardUncheckedUpdateManyInput>
    /**
     * Filter which UserRewards to update
     */
    where?: UserRewardWhereInput
    /**
     * Limit how many UserRewards to update.
     */
    limit?: number
  }

  /**
   * UserReward updateManyAndReturn
   */
  export type UserRewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * The data used to update UserRewards.
     */
    data: XOR<UserRewardUpdateManyMutationInput, UserRewardUncheckedUpdateManyInput>
    /**
     * Filter which UserRewards to update
     */
    where?: UserRewardWhereInput
    /**
     * Limit how many UserRewards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserReward upsert
   */
  export type UserRewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
    /**
     * The filter to search for the UserReward to update in case it exists.
     */
    where: UserRewardWhereUniqueInput
    /**
     * In case the UserReward found by the `where` argument doesn't exist, create a new UserReward with this data.
     */
    create: XOR<UserRewardCreateInput, UserRewardUncheckedCreateInput>
    /**
     * In case the UserReward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRewardUpdateInput, UserRewardUncheckedUpdateInput>
  }

  /**
   * UserReward delete
   */
  export type UserRewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
    /**
     * Filter which UserReward to delete.
     */
    where: UserRewardWhereUniqueInput
  }

  /**
   * UserReward deleteMany
   */
  export type UserRewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRewards to delete
     */
    where?: UserRewardWhereInput
    /**
     * Limit how many UserRewards to delete.
     */
    limit?: number
  }

  /**
   * UserReward without action
   */
  export type UserRewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReward
     */
    select?: UserRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReward
     */
    omit?: UserRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    knowledgePointsCost: number | null
  }

  export type PetSumAggregateOutputType = {
    knowledgePointsCost: number | null
  }

  export type PetMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    rarity: string | null
    knowledgePointsCost: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type PetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    rarity: string | null
    knowledgePointsCost: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    rarity: number
    knowledgePointsCost: number
    abilities: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    knowledgePointsCost?: true
  }

  export type PetSumAggregateInputType = {
    knowledgePointsCost?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    rarity?: true
    knowledgePointsCost?: true
    isActive?: true
    createdAt?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    rarity?: true
    knowledgePointsCost?: true
    isActive?: true
    createdAt?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    rarity?: true
    knowledgePointsCost?: true
    abilities?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: string
    name: string
    description: string
    imageUrl: string
    rarity: string
    knowledgePointsCost: number
    abilities: string[]
    isActive: boolean
    createdAt: Date
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    rarity?: boolean
    knowledgePointsCost?: boolean
    abilities?: boolean
    isActive?: boolean
    createdAt?: boolean
    userPets?: boolean | Pet$userPetsArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    rarity?: boolean
    knowledgePointsCost?: boolean
    abilities?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    rarity?: boolean
    knowledgePointsCost?: boolean
    abilities?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    rarity?: boolean
    knowledgePointsCost?: boolean
    abilities?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "rarity" | "knowledgePointsCost" | "abilities" | "isActive" | "createdAt", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPets?: boolean | Pet$userPetsArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      userPets: Prisma.$UserPetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      imageUrl: string
      rarity: string
      knowledgePointsCost: number
      abilities: string[]
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userPets<T extends Pet$userPetsArgs<ExtArgs> = {}>(args?: Subset<T, Pet$userPetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'String'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly description: FieldRef<"Pet", 'String'>
    readonly imageUrl: FieldRef<"Pet", 'String'>
    readonly rarity: FieldRef<"Pet", 'String'>
    readonly knowledgePointsCost: FieldRef<"Pet", 'Int'>
    readonly abilities: FieldRef<"Pet", 'String[]'>
    readonly isActive: FieldRef<"Pet", 'Boolean'>
    readonly createdAt: FieldRef<"Pet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.userPets
   */
  export type Pet$userPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
    where?: UserPetWhereInput
    orderBy?: UserPetOrderByWithRelationInput | UserPetOrderByWithRelationInput[]
    cursor?: UserPetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPetScalarFieldEnum | UserPetScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model UserPet
   */

  export type AggregateUserPet = {
    _count: UserPetCountAggregateOutputType | null
    _avg: UserPetAvgAggregateOutputType | null
    _sum: UserPetSumAggregateOutputType | null
    _min: UserPetMinAggregateOutputType | null
    _max: UserPetMaxAggregateOutputType | null
  }

  export type UserPetAvgAggregateOutputType = {
    level: number | null
    experience: number | null
  }

  export type UserPetSumAggregateOutputType = {
    level: number | null
    experience: number | null
  }

  export type UserPetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    petId: string | null
    nickname: string | null
    level: number | null
    experience: number | null
    isActive: boolean | null
    acquiredAt: Date | null
  }

  export type UserPetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    petId: string | null
    nickname: string | null
    level: number | null
    experience: number | null
    isActive: boolean | null
    acquiredAt: Date | null
  }

  export type UserPetCountAggregateOutputType = {
    id: number
    userId: number
    petId: number
    nickname: number
    level: number
    experience: number
    isActive: number
    acquiredAt: number
    _all: number
  }


  export type UserPetAvgAggregateInputType = {
    level?: true
    experience?: true
  }

  export type UserPetSumAggregateInputType = {
    level?: true
    experience?: true
  }

  export type UserPetMinAggregateInputType = {
    id?: true
    userId?: true
    petId?: true
    nickname?: true
    level?: true
    experience?: true
    isActive?: true
    acquiredAt?: true
  }

  export type UserPetMaxAggregateInputType = {
    id?: true
    userId?: true
    petId?: true
    nickname?: true
    level?: true
    experience?: true
    isActive?: true
    acquiredAt?: true
  }

  export type UserPetCountAggregateInputType = {
    id?: true
    userId?: true
    petId?: true
    nickname?: true
    level?: true
    experience?: true
    isActive?: true
    acquiredAt?: true
    _all?: true
  }

  export type UserPetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPet to aggregate.
     */
    where?: UserPetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPets to fetch.
     */
    orderBy?: UserPetOrderByWithRelationInput | UserPetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPets
    **/
    _count?: true | UserPetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPetMaxAggregateInputType
  }

  export type GetUserPetAggregateType<T extends UserPetAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPet[P]>
      : GetScalarType<T[P], AggregateUserPet[P]>
  }




  export type UserPetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPetWhereInput
    orderBy?: UserPetOrderByWithAggregationInput | UserPetOrderByWithAggregationInput[]
    by: UserPetScalarFieldEnum[] | UserPetScalarFieldEnum
    having?: UserPetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPetCountAggregateInputType | true
    _avg?: UserPetAvgAggregateInputType
    _sum?: UserPetSumAggregateInputType
    _min?: UserPetMinAggregateInputType
    _max?: UserPetMaxAggregateInputType
  }

  export type UserPetGroupByOutputType = {
    id: string
    userId: string
    petId: string
    nickname: string | null
    level: number
    experience: number
    isActive: boolean
    acquiredAt: Date
    _count: UserPetCountAggregateOutputType | null
    _avg: UserPetAvgAggregateOutputType | null
    _sum: UserPetSumAggregateOutputType | null
    _min: UserPetMinAggregateOutputType | null
    _max: UserPetMaxAggregateOutputType | null
  }

  type GetUserPetGroupByPayload<T extends UserPetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPetGroupByOutputType[P]>
            : GetScalarType<T[P], UserPetGroupByOutputType[P]>
        }
      >
    >


  export type UserPetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    petId?: boolean
    nickname?: boolean
    level?: boolean
    experience?: boolean
    isActive?: boolean
    acquiredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPet"]>

  export type UserPetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    petId?: boolean
    nickname?: boolean
    level?: boolean
    experience?: boolean
    isActive?: boolean
    acquiredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPet"]>

  export type UserPetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    petId?: boolean
    nickname?: boolean
    level?: boolean
    experience?: boolean
    isActive?: boolean
    acquiredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPet"]>

  export type UserPetSelectScalar = {
    id?: boolean
    userId?: boolean
    petId?: boolean
    nickname?: boolean
    level?: boolean
    experience?: boolean
    isActive?: boolean
    acquiredAt?: boolean
  }

  export type UserPetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "petId" | "nickname" | "level" | "experience" | "isActive" | "acquiredAt", ExtArgs["result"]["userPet"]>
  export type UserPetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type UserPetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type UserPetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $UserPetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      petId: string
      nickname: string | null
      level: number
      experience: number
      isActive: boolean
      acquiredAt: Date
    }, ExtArgs["result"]["userPet"]>
    composites: {}
  }

  type UserPetGetPayload<S extends boolean | null | undefined | UserPetDefaultArgs> = $Result.GetResult<Prisma.$UserPetPayload, S>

  type UserPetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPetCountAggregateInputType | true
    }

  export interface UserPetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPet'], meta: { name: 'UserPet' } }
    /**
     * Find zero or one UserPet that matches the filter.
     * @param {UserPetFindUniqueArgs} args - Arguments to find a UserPet
     * @example
     * // Get one UserPet
     * const userPet = await prisma.userPet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPetFindUniqueArgs>(args: SelectSubset<T, UserPetFindUniqueArgs<ExtArgs>>): Prisma__UserPetClient<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPetFindUniqueOrThrowArgs} args - Arguments to find a UserPet
     * @example
     * // Get one UserPet
     * const userPet = await prisma.userPet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPetFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPetClient<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetFindFirstArgs} args - Arguments to find a UserPet
     * @example
     * // Get one UserPet
     * const userPet = await prisma.userPet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPetFindFirstArgs>(args?: SelectSubset<T, UserPetFindFirstArgs<ExtArgs>>): Prisma__UserPetClient<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetFindFirstOrThrowArgs} args - Arguments to find a UserPet
     * @example
     * // Get one UserPet
     * const userPet = await prisma.userPet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPetFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPetFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPetClient<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPets
     * const userPets = await prisma.userPet.findMany()
     * 
     * // Get first 10 UserPets
     * const userPets = await prisma.userPet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPetWithIdOnly = await prisma.userPet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPetFindManyArgs>(args?: SelectSubset<T, UserPetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPet.
     * @param {UserPetCreateArgs} args - Arguments to create a UserPet.
     * @example
     * // Create one UserPet
     * const UserPet = await prisma.userPet.create({
     *   data: {
     *     // ... data to create a UserPet
     *   }
     * })
     * 
     */
    create<T extends UserPetCreateArgs>(args: SelectSubset<T, UserPetCreateArgs<ExtArgs>>): Prisma__UserPetClient<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPets.
     * @param {UserPetCreateManyArgs} args - Arguments to create many UserPets.
     * @example
     * // Create many UserPets
     * const userPet = await prisma.userPet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPetCreateManyArgs>(args?: SelectSubset<T, UserPetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPets and returns the data saved in the database.
     * @param {UserPetCreateManyAndReturnArgs} args - Arguments to create many UserPets.
     * @example
     * // Create many UserPets
     * const userPet = await prisma.userPet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPets and only return the `id`
     * const userPetWithIdOnly = await prisma.userPet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPetCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPet.
     * @param {UserPetDeleteArgs} args - Arguments to delete one UserPet.
     * @example
     * // Delete one UserPet
     * const UserPet = await prisma.userPet.delete({
     *   where: {
     *     // ... filter to delete one UserPet
     *   }
     * })
     * 
     */
    delete<T extends UserPetDeleteArgs>(args: SelectSubset<T, UserPetDeleteArgs<ExtArgs>>): Prisma__UserPetClient<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPet.
     * @param {UserPetUpdateArgs} args - Arguments to update one UserPet.
     * @example
     * // Update one UserPet
     * const userPet = await prisma.userPet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPetUpdateArgs>(args: SelectSubset<T, UserPetUpdateArgs<ExtArgs>>): Prisma__UserPetClient<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPets.
     * @param {UserPetDeleteManyArgs} args - Arguments to filter UserPets to delete.
     * @example
     * // Delete a few UserPets
     * const { count } = await prisma.userPet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPetDeleteManyArgs>(args?: SelectSubset<T, UserPetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPets
     * const userPet = await prisma.userPet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPetUpdateManyArgs>(args: SelectSubset<T, UserPetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPets and returns the data updated in the database.
     * @param {UserPetUpdateManyAndReturnArgs} args - Arguments to update many UserPets.
     * @example
     * // Update many UserPets
     * const userPet = await prisma.userPet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPets and only return the `id`
     * const userPetWithIdOnly = await prisma.userPet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPetUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPet.
     * @param {UserPetUpsertArgs} args - Arguments to update or create a UserPet.
     * @example
     * // Update or create a UserPet
     * const userPet = await prisma.userPet.upsert({
     *   create: {
     *     // ... data to create a UserPet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPet we want to update
     *   }
     * })
     */
    upsert<T extends UserPetUpsertArgs>(args: SelectSubset<T, UserPetUpsertArgs<ExtArgs>>): Prisma__UserPetClient<$Result.GetResult<Prisma.$UserPetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetCountArgs} args - Arguments to filter UserPets to count.
     * @example
     * // Count the number of UserPets
     * const count = await prisma.userPet.count({
     *   where: {
     *     // ... the filter for the UserPets we want to count
     *   }
     * })
    **/
    count<T extends UserPetCountArgs>(
      args?: Subset<T, UserPetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPetAggregateArgs>(args: Subset<T, UserPetAggregateArgs>): Prisma.PrismaPromise<GetUserPetAggregateType<T>>

    /**
     * Group by UserPet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPetGroupByArgs['orderBy'] }
        : { orderBy?: UserPetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPet model
   */
  readonly fields: UserPetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPet model
   */
  interface UserPetFieldRefs {
    readonly id: FieldRef<"UserPet", 'String'>
    readonly userId: FieldRef<"UserPet", 'String'>
    readonly petId: FieldRef<"UserPet", 'String'>
    readonly nickname: FieldRef<"UserPet", 'String'>
    readonly level: FieldRef<"UserPet", 'Int'>
    readonly experience: FieldRef<"UserPet", 'Int'>
    readonly isActive: FieldRef<"UserPet", 'Boolean'>
    readonly acquiredAt: FieldRef<"UserPet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPet findUnique
   */
  export type UserPetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
    /**
     * Filter, which UserPet to fetch.
     */
    where: UserPetWhereUniqueInput
  }

  /**
   * UserPet findUniqueOrThrow
   */
  export type UserPetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
    /**
     * Filter, which UserPet to fetch.
     */
    where: UserPetWhereUniqueInput
  }

  /**
   * UserPet findFirst
   */
  export type UserPetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
    /**
     * Filter, which UserPet to fetch.
     */
    where?: UserPetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPets to fetch.
     */
    orderBy?: UserPetOrderByWithRelationInput | UserPetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPets.
     */
    cursor?: UserPetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPets.
     */
    distinct?: UserPetScalarFieldEnum | UserPetScalarFieldEnum[]
  }

  /**
   * UserPet findFirstOrThrow
   */
  export type UserPetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
    /**
     * Filter, which UserPet to fetch.
     */
    where?: UserPetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPets to fetch.
     */
    orderBy?: UserPetOrderByWithRelationInput | UserPetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPets.
     */
    cursor?: UserPetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPets.
     */
    distinct?: UserPetScalarFieldEnum | UserPetScalarFieldEnum[]
  }

  /**
   * UserPet findMany
   */
  export type UserPetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
    /**
     * Filter, which UserPets to fetch.
     */
    where?: UserPetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPets to fetch.
     */
    orderBy?: UserPetOrderByWithRelationInput | UserPetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPets.
     */
    cursor?: UserPetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPets.
     */
    skip?: number
    distinct?: UserPetScalarFieldEnum | UserPetScalarFieldEnum[]
  }

  /**
   * UserPet create
   */
  export type UserPetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPet.
     */
    data: XOR<UserPetCreateInput, UserPetUncheckedCreateInput>
  }

  /**
   * UserPet createMany
   */
  export type UserPetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPets.
     */
    data: UserPetCreateManyInput | UserPetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPet createManyAndReturn
   */
  export type UserPetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * The data used to create many UserPets.
     */
    data: UserPetCreateManyInput | UserPetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPet update
   */
  export type UserPetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPet.
     */
    data: XOR<UserPetUpdateInput, UserPetUncheckedUpdateInput>
    /**
     * Choose, which UserPet to update.
     */
    where: UserPetWhereUniqueInput
  }

  /**
   * UserPet updateMany
   */
  export type UserPetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPets.
     */
    data: XOR<UserPetUpdateManyMutationInput, UserPetUncheckedUpdateManyInput>
    /**
     * Filter which UserPets to update
     */
    where?: UserPetWhereInput
    /**
     * Limit how many UserPets to update.
     */
    limit?: number
  }

  /**
   * UserPet updateManyAndReturn
   */
  export type UserPetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * The data used to update UserPets.
     */
    data: XOR<UserPetUpdateManyMutationInput, UserPetUncheckedUpdateManyInput>
    /**
     * Filter which UserPets to update
     */
    where?: UserPetWhereInput
    /**
     * Limit how many UserPets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPet upsert
   */
  export type UserPetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPet to update in case it exists.
     */
    where: UserPetWhereUniqueInput
    /**
     * In case the UserPet found by the `where` argument doesn't exist, create a new UserPet with this data.
     */
    create: XOR<UserPetCreateInput, UserPetUncheckedCreateInput>
    /**
     * In case the UserPet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPetUpdateInput, UserPetUncheckedUpdateInput>
  }

  /**
   * UserPet delete
   */
  export type UserPetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
    /**
     * Filter which UserPet to delete.
     */
    where: UserPetWhereUniqueInput
  }

  /**
   * UserPet deleteMany
   */
  export type UserPetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPets to delete
     */
    where?: UserPetWhereInput
    /**
     * Limit how many UserPets to delete.
     */
    limit?: number
  }

  /**
   * UserPet without action
   */
  export type UserPetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPet
     */
    select?: UserPetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPet
     */
    omit?: UserPetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPetInclude<ExtArgs> | null
  }


  /**
   * Model Boss
   */

  export type AggregateBoss = {
    _count: BossCountAggregateOutputType | null
    _avg: BossAvgAggregateOutputType | null
    _sum: BossSumAggregateOutputType | null
    _min: BossMinAggregateOutputType | null
    _max: BossMaxAggregateOutputType | null
  }

  export type BossAvgAggregateOutputType = {
    baseHp: number | null
    hpPerLevel: number | null
  }

  export type BossSumAggregateOutputType = {
    baseHp: number | null
    hpPerLevel: number | null
  }

  export type BossMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    baseHp: number | null
    hpPerLevel: number | null
    difficulty: $Enums.Difficulty | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BossMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    baseHp: number | null
    hpPerLevel: number | null
    difficulty: $Enums.Difficulty | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BossCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    baseHp: number
    hpPerLevel: number
    difficulty: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type BossAvgAggregateInputType = {
    baseHp?: true
    hpPerLevel?: true
  }

  export type BossSumAggregateInputType = {
    baseHp?: true
    hpPerLevel?: true
  }

  export type BossMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    baseHp?: true
    hpPerLevel?: true
    difficulty?: true
    isActive?: true
    createdAt?: true
  }

  export type BossMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    baseHp?: true
    hpPerLevel?: true
    difficulty?: true
    isActive?: true
    createdAt?: true
  }

  export type BossCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    baseHp?: true
    hpPerLevel?: true
    difficulty?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type BossAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boss to aggregate.
     */
    where?: BossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bosses to fetch.
     */
    orderBy?: BossOrderByWithRelationInput | BossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bosses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bosses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bosses
    **/
    _count?: true | BossCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BossAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BossSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BossMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BossMaxAggregateInputType
  }

  export type GetBossAggregateType<T extends BossAggregateArgs> = {
        [P in keyof T & keyof AggregateBoss]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoss[P]>
      : GetScalarType<T[P], AggregateBoss[P]>
  }




  export type BossGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BossWhereInput
    orderBy?: BossOrderByWithAggregationInput | BossOrderByWithAggregationInput[]
    by: BossScalarFieldEnum[] | BossScalarFieldEnum
    having?: BossScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BossCountAggregateInputType | true
    _avg?: BossAvgAggregateInputType
    _sum?: BossSumAggregateInputType
    _min?: BossMinAggregateInputType
    _max?: BossMaxAggregateInputType
  }

  export type BossGroupByOutputType = {
    id: string
    name: string
    description: string
    imageUrl: string
    baseHp: number
    hpPerLevel: number
    difficulty: $Enums.Difficulty
    isActive: boolean
    createdAt: Date
    _count: BossCountAggregateOutputType | null
    _avg: BossAvgAggregateOutputType | null
    _sum: BossSumAggregateOutputType | null
    _min: BossMinAggregateOutputType | null
    _max: BossMaxAggregateOutputType | null
  }

  type GetBossGroupByPayload<T extends BossGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BossGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BossGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BossGroupByOutputType[P]>
            : GetScalarType<T[P], BossGroupByOutputType[P]>
        }
      >
    >


  export type BossSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    baseHp?: boolean
    hpPerLevel?: boolean
    difficulty?: boolean
    isActive?: boolean
    createdAt?: boolean
    bossQuestions?: boolean | Boss$bossQuestionsArgs<ExtArgs>
    _count?: boolean | BossCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boss"]>

  export type BossSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    baseHp?: boolean
    hpPerLevel?: boolean
    difficulty?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["boss"]>

  export type BossSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    baseHp?: boolean
    hpPerLevel?: boolean
    difficulty?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["boss"]>

  export type BossSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    baseHp?: boolean
    hpPerLevel?: boolean
    difficulty?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type BossOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "baseHp" | "hpPerLevel" | "difficulty" | "isActive" | "createdAt", ExtArgs["result"]["boss"]>
  export type BossInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bossQuestions?: boolean | Boss$bossQuestionsArgs<ExtArgs>
    _count?: boolean | BossCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BossIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BossIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BossPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Boss"
    objects: {
      bossQuestions: Prisma.$BossQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      imageUrl: string
      baseHp: number
      hpPerLevel: number
      difficulty: $Enums.Difficulty
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["boss"]>
    composites: {}
  }

  type BossGetPayload<S extends boolean | null | undefined | BossDefaultArgs> = $Result.GetResult<Prisma.$BossPayload, S>

  type BossCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BossFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BossCountAggregateInputType | true
    }

  export interface BossDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Boss'], meta: { name: 'Boss' } }
    /**
     * Find zero or one Boss that matches the filter.
     * @param {BossFindUniqueArgs} args - Arguments to find a Boss
     * @example
     * // Get one Boss
     * const boss = await prisma.boss.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BossFindUniqueArgs>(args: SelectSubset<T, BossFindUniqueArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Boss that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BossFindUniqueOrThrowArgs} args - Arguments to find a Boss
     * @example
     * // Get one Boss
     * const boss = await prisma.boss.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BossFindUniqueOrThrowArgs>(args: SelectSubset<T, BossFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boss that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossFindFirstArgs} args - Arguments to find a Boss
     * @example
     * // Get one Boss
     * const boss = await prisma.boss.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BossFindFirstArgs>(args?: SelectSubset<T, BossFindFirstArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boss that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossFindFirstOrThrowArgs} args - Arguments to find a Boss
     * @example
     * // Get one Boss
     * const boss = await prisma.boss.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BossFindFirstOrThrowArgs>(args?: SelectSubset<T, BossFindFirstOrThrowArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bosses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bosses
     * const bosses = await prisma.boss.findMany()
     * 
     * // Get first 10 Bosses
     * const bosses = await prisma.boss.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bossWithIdOnly = await prisma.boss.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BossFindManyArgs>(args?: SelectSubset<T, BossFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Boss.
     * @param {BossCreateArgs} args - Arguments to create a Boss.
     * @example
     * // Create one Boss
     * const Boss = await prisma.boss.create({
     *   data: {
     *     // ... data to create a Boss
     *   }
     * })
     * 
     */
    create<T extends BossCreateArgs>(args: SelectSubset<T, BossCreateArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bosses.
     * @param {BossCreateManyArgs} args - Arguments to create many Bosses.
     * @example
     * // Create many Bosses
     * const boss = await prisma.boss.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BossCreateManyArgs>(args?: SelectSubset<T, BossCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bosses and returns the data saved in the database.
     * @param {BossCreateManyAndReturnArgs} args - Arguments to create many Bosses.
     * @example
     * // Create many Bosses
     * const boss = await prisma.boss.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bosses and only return the `id`
     * const bossWithIdOnly = await prisma.boss.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BossCreateManyAndReturnArgs>(args?: SelectSubset<T, BossCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Boss.
     * @param {BossDeleteArgs} args - Arguments to delete one Boss.
     * @example
     * // Delete one Boss
     * const Boss = await prisma.boss.delete({
     *   where: {
     *     // ... filter to delete one Boss
     *   }
     * })
     * 
     */
    delete<T extends BossDeleteArgs>(args: SelectSubset<T, BossDeleteArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Boss.
     * @param {BossUpdateArgs} args - Arguments to update one Boss.
     * @example
     * // Update one Boss
     * const boss = await prisma.boss.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BossUpdateArgs>(args: SelectSubset<T, BossUpdateArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bosses.
     * @param {BossDeleteManyArgs} args - Arguments to filter Bosses to delete.
     * @example
     * // Delete a few Bosses
     * const { count } = await prisma.boss.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BossDeleteManyArgs>(args?: SelectSubset<T, BossDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bosses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bosses
     * const boss = await prisma.boss.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BossUpdateManyArgs>(args: SelectSubset<T, BossUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bosses and returns the data updated in the database.
     * @param {BossUpdateManyAndReturnArgs} args - Arguments to update many Bosses.
     * @example
     * // Update many Bosses
     * const boss = await prisma.boss.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bosses and only return the `id`
     * const bossWithIdOnly = await prisma.boss.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BossUpdateManyAndReturnArgs>(args: SelectSubset<T, BossUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Boss.
     * @param {BossUpsertArgs} args - Arguments to update or create a Boss.
     * @example
     * // Update or create a Boss
     * const boss = await prisma.boss.upsert({
     *   create: {
     *     // ... data to create a Boss
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boss we want to update
     *   }
     * })
     */
    upsert<T extends BossUpsertArgs>(args: SelectSubset<T, BossUpsertArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bosses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossCountArgs} args - Arguments to filter Bosses to count.
     * @example
     * // Count the number of Bosses
     * const count = await prisma.boss.count({
     *   where: {
     *     // ... the filter for the Bosses we want to count
     *   }
     * })
    **/
    count<T extends BossCountArgs>(
      args?: Subset<T, BossCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BossCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BossAggregateArgs>(args: Subset<T, BossAggregateArgs>): Prisma.PrismaPromise<GetBossAggregateType<T>>

    /**
     * Group by Boss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BossGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BossGroupByArgs['orderBy'] }
        : { orderBy?: BossGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BossGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBossGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Boss model
   */
  readonly fields: BossFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Boss.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BossClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bossQuestions<T extends Boss$bossQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Boss$bossQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Boss model
   */
  interface BossFieldRefs {
    readonly id: FieldRef<"Boss", 'String'>
    readonly name: FieldRef<"Boss", 'String'>
    readonly description: FieldRef<"Boss", 'String'>
    readonly imageUrl: FieldRef<"Boss", 'String'>
    readonly baseHp: FieldRef<"Boss", 'Int'>
    readonly hpPerLevel: FieldRef<"Boss", 'Int'>
    readonly difficulty: FieldRef<"Boss", 'Difficulty'>
    readonly isActive: FieldRef<"Boss", 'Boolean'>
    readonly createdAt: FieldRef<"Boss", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Boss findUnique
   */
  export type BossFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter, which Boss to fetch.
     */
    where: BossWhereUniqueInput
  }

  /**
   * Boss findUniqueOrThrow
   */
  export type BossFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter, which Boss to fetch.
     */
    where: BossWhereUniqueInput
  }

  /**
   * Boss findFirst
   */
  export type BossFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter, which Boss to fetch.
     */
    where?: BossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bosses to fetch.
     */
    orderBy?: BossOrderByWithRelationInput | BossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bosses.
     */
    cursor?: BossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bosses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bosses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bosses.
     */
    distinct?: BossScalarFieldEnum | BossScalarFieldEnum[]
  }

  /**
   * Boss findFirstOrThrow
   */
  export type BossFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter, which Boss to fetch.
     */
    where?: BossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bosses to fetch.
     */
    orderBy?: BossOrderByWithRelationInput | BossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bosses.
     */
    cursor?: BossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bosses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bosses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bosses.
     */
    distinct?: BossScalarFieldEnum | BossScalarFieldEnum[]
  }

  /**
   * Boss findMany
   */
  export type BossFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter, which Bosses to fetch.
     */
    where?: BossWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bosses to fetch.
     */
    orderBy?: BossOrderByWithRelationInput | BossOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bosses.
     */
    cursor?: BossWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bosses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bosses.
     */
    skip?: number
    distinct?: BossScalarFieldEnum | BossScalarFieldEnum[]
  }

  /**
   * Boss create
   */
  export type BossCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * The data needed to create a Boss.
     */
    data: XOR<BossCreateInput, BossUncheckedCreateInput>
  }

  /**
   * Boss createMany
   */
  export type BossCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bosses.
     */
    data: BossCreateManyInput | BossCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boss createManyAndReturn
   */
  export type BossCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * The data used to create many Bosses.
     */
    data: BossCreateManyInput | BossCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boss update
   */
  export type BossUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * The data needed to update a Boss.
     */
    data: XOR<BossUpdateInput, BossUncheckedUpdateInput>
    /**
     * Choose, which Boss to update.
     */
    where: BossWhereUniqueInput
  }

  /**
   * Boss updateMany
   */
  export type BossUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bosses.
     */
    data: XOR<BossUpdateManyMutationInput, BossUncheckedUpdateManyInput>
    /**
     * Filter which Bosses to update
     */
    where?: BossWhereInput
    /**
     * Limit how many Bosses to update.
     */
    limit?: number
  }

  /**
   * Boss updateManyAndReturn
   */
  export type BossUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * The data used to update Bosses.
     */
    data: XOR<BossUpdateManyMutationInput, BossUncheckedUpdateManyInput>
    /**
     * Filter which Bosses to update
     */
    where?: BossWhereInput
    /**
     * Limit how many Bosses to update.
     */
    limit?: number
  }

  /**
   * Boss upsert
   */
  export type BossUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * The filter to search for the Boss to update in case it exists.
     */
    where: BossWhereUniqueInput
    /**
     * In case the Boss found by the `where` argument doesn't exist, create a new Boss with this data.
     */
    create: XOR<BossCreateInput, BossUncheckedCreateInput>
    /**
     * In case the Boss was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BossUpdateInput, BossUncheckedUpdateInput>
  }

  /**
   * Boss delete
   */
  export type BossDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
    /**
     * Filter which Boss to delete.
     */
    where: BossWhereUniqueInput
  }

  /**
   * Boss deleteMany
   */
  export type BossDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bosses to delete
     */
    where?: BossWhereInput
    /**
     * Limit how many Bosses to delete.
     */
    limit?: number
  }

  /**
   * Boss.bossQuestions
   */
  export type Boss$bossQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
    where?: BossQuestionWhereInput
    orderBy?: BossQuestionOrderByWithRelationInput | BossQuestionOrderByWithRelationInput[]
    cursor?: BossQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BossQuestionScalarFieldEnum | BossQuestionScalarFieldEnum[]
  }

  /**
   * Boss without action
   */
  export type BossDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boss
     */
    select?: BossSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boss
     */
    omit?: BossOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossInclude<ExtArgs> | null
  }


  /**
   * Model BossQuestion
   */

  export type AggregateBossQuestion = {
    _count: BossQuestionCountAggregateOutputType | null
    _min: BossQuestionMinAggregateOutputType | null
    _max: BossQuestionMaxAggregateOutputType | null
  }

  export type BossQuestionMinAggregateOutputType = {
    id: string | null
    bossId: string | null
    questionId: string | null
  }

  export type BossQuestionMaxAggregateOutputType = {
    id: string | null
    bossId: string | null
    questionId: string | null
  }

  export type BossQuestionCountAggregateOutputType = {
    id: number
    bossId: number
    questionId: number
    _all: number
  }


  export type BossQuestionMinAggregateInputType = {
    id?: true
    bossId?: true
    questionId?: true
  }

  export type BossQuestionMaxAggregateInputType = {
    id?: true
    bossId?: true
    questionId?: true
  }

  export type BossQuestionCountAggregateInputType = {
    id?: true
    bossId?: true
    questionId?: true
    _all?: true
  }

  export type BossQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BossQuestion to aggregate.
     */
    where?: BossQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BossQuestions to fetch.
     */
    orderBy?: BossQuestionOrderByWithRelationInput | BossQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BossQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BossQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BossQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BossQuestions
    **/
    _count?: true | BossQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BossQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BossQuestionMaxAggregateInputType
  }

  export type GetBossQuestionAggregateType<T extends BossQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateBossQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBossQuestion[P]>
      : GetScalarType<T[P], AggregateBossQuestion[P]>
  }




  export type BossQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BossQuestionWhereInput
    orderBy?: BossQuestionOrderByWithAggregationInput | BossQuestionOrderByWithAggregationInput[]
    by: BossQuestionScalarFieldEnum[] | BossQuestionScalarFieldEnum
    having?: BossQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BossQuestionCountAggregateInputType | true
    _min?: BossQuestionMinAggregateInputType
    _max?: BossQuestionMaxAggregateInputType
  }

  export type BossQuestionGroupByOutputType = {
    id: string
    bossId: string
    questionId: string
    _count: BossQuestionCountAggregateOutputType | null
    _min: BossQuestionMinAggregateOutputType | null
    _max: BossQuestionMaxAggregateOutputType | null
  }

  type GetBossQuestionGroupByPayload<T extends BossQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BossQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BossQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BossQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], BossQuestionGroupByOutputType[P]>
        }
      >
    >


  export type BossQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bossId?: boolean
    questionId?: boolean
    boss?: boolean | BossDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bossQuestion"]>

  export type BossQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bossId?: boolean
    questionId?: boolean
    boss?: boolean | BossDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bossQuestion"]>

  export type BossQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bossId?: boolean
    questionId?: boolean
    boss?: boolean | BossDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bossQuestion"]>

  export type BossQuestionSelectScalar = {
    id?: boolean
    bossId?: boolean
    questionId?: boolean
  }

  export type BossQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bossId" | "questionId", ExtArgs["result"]["bossQuestion"]>
  export type BossQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boss?: boolean | BossDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type BossQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boss?: boolean | BossDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type BossQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boss?: boolean | BossDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $BossQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BossQuestion"
    objects: {
      boss: Prisma.$BossPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bossId: string
      questionId: string
    }, ExtArgs["result"]["bossQuestion"]>
    composites: {}
  }

  type BossQuestionGetPayload<S extends boolean | null | undefined | BossQuestionDefaultArgs> = $Result.GetResult<Prisma.$BossQuestionPayload, S>

  type BossQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BossQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BossQuestionCountAggregateInputType | true
    }

  export interface BossQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BossQuestion'], meta: { name: 'BossQuestion' } }
    /**
     * Find zero or one BossQuestion that matches the filter.
     * @param {BossQuestionFindUniqueArgs} args - Arguments to find a BossQuestion
     * @example
     * // Get one BossQuestion
     * const bossQuestion = await prisma.bossQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BossQuestionFindUniqueArgs>(args: SelectSubset<T, BossQuestionFindUniqueArgs<ExtArgs>>): Prisma__BossQuestionClient<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BossQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BossQuestionFindUniqueOrThrowArgs} args - Arguments to find a BossQuestion
     * @example
     * // Get one BossQuestion
     * const bossQuestion = await prisma.bossQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BossQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, BossQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BossQuestionClient<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BossQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossQuestionFindFirstArgs} args - Arguments to find a BossQuestion
     * @example
     * // Get one BossQuestion
     * const bossQuestion = await prisma.bossQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BossQuestionFindFirstArgs>(args?: SelectSubset<T, BossQuestionFindFirstArgs<ExtArgs>>): Prisma__BossQuestionClient<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BossQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossQuestionFindFirstOrThrowArgs} args - Arguments to find a BossQuestion
     * @example
     * // Get one BossQuestion
     * const bossQuestion = await prisma.bossQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BossQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, BossQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BossQuestionClient<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BossQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BossQuestions
     * const bossQuestions = await prisma.bossQuestion.findMany()
     * 
     * // Get first 10 BossQuestions
     * const bossQuestions = await prisma.bossQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bossQuestionWithIdOnly = await prisma.bossQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BossQuestionFindManyArgs>(args?: SelectSubset<T, BossQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BossQuestion.
     * @param {BossQuestionCreateArgs} args - Arguments to create a BossQuestion.
     * @example
     * // Create one BossQuestion
     * const BossQuestion = await prisma.bossQuestion.create({
     *   data: {
     *     // ... data to create a BossQuestion
     *   }
     * })
     * 
     */
    create<T extends BossQuestionCreateArgs>(args: SelectSubset<T, BossQuestionCreateArgs<ExtArgs>>): Prisma__BossQuestionClient<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BossQuestions.
     * @param {BossQuestionCreateManyArgs} args - Arguments to create many BossQuestions.
     * @example
     * // Create many BossQuestions
     * const bossQuestion = await prisma.bossQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BossQuestionCreateManyArgs>(args?: SelectSubset<T, BossQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BossQuestions and returns the data saved in the database.
     * @param {BossQuestionCreateManyAndReturnArgs} args - Arguments to create many BossQuestions.
     * @example
     * // Create many BossQuestions
     * const bossQuestion = await prisma.bossQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BossQuestions and only return the `id`
     * const bossQuestionWithIdOnly = await prisma.bossQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BossQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, BossQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BossQuestion.
     * @param {BossQuestionDeleteArgs} args - Arguments to delete one BossQuestion.
     * @example
     * // Delete one BossQuestion
     * const BossQuestion = await prisma.bossQuestion.delete({
     *   where: {
     *     // ... filter to delete one BossQuestion
     *   }
     * })
     * 
     */
    delete<T extends BossQuestionDeleteArgs>(args: SelectSubset<T, BossQuestionDeleteArgs<ExtArgs>>): Prisma__BossQuestionClient<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BossQuestion.
     * @param {BossQuestionUpdateArgs} args - Arguments to update one BossQuestion.
     * @example
     * // Update one BossQuestion
     * const bossQuestion = await prisma.bossQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BossQuestionUpdateArgs>(args: SelectSubset<T, BossQuestionUpdateArgs<ExtArgs>>): Prisma__BossQuestionClient<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BossQuestions.
     * @param {BossQuestionDeleteManyArgs} args - Arguments to filter BossQuestions to delete.
     * @example
     * // Delete a few BossQuestions
     * const { count } = await prisma.bossQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BossQuestionDeleteManyArgs>(args?: SelectSubset<T, BossQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BossQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BossQuestions
     * const bossQuestion = await prisma.bossQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BossQuestionUpdateManyArgs>(args: SelectSubset<T, BossQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BossQuestions and returns the data updated in the database.
     * @param {BossQuestionUpdateManyAndReturnArgs} args - Arguments to update many BossQuestions.
     * @example
     * // Update many BossQuestions
     * const bossQuestion = await prisma.bossQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BossQuestions and only return the `id`
     * const bossQuestionWithIdOnly = await prisma.bossQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BossQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, BossQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BossQuestion.
     * @param {BossQuestionUpsertArgs} args - Arguments to update or create a BossQuestion.
     * @example
     * // Update or create a BossQuestion
     * const bossQuestion = await prisma.bossQuestion.upsert({
     *   create: {
     *     // ... data to create a BossQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BossQuestion we want to update
     *   }
     * })
     */
    upsert<T extends BossQuestionUpsertArgs>(args: SelectSubset<T, BossQuestionUpsertArgs<ExtArgs>>): Prisma__BossQuestionClient<$Result.GetResult<Prisma.$BossQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BossQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossQuestionCountArgs} args - Arguments to filter BossQuestions to count.
     * @example
     * // Count the number of BossQuestions
     * const count = await prisma.bossQuestion.count({
     *   where: {
     *     // ... the filter for the BossQuestions we want to count
     *   }
     * })
    **/
    count<T extends BossQuestionCountArgs>(
      args?: Subset<T, BossQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BossQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BossQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BossQuestionAggregateArgs>(args: Subset<T, BossQuestionAggregateArgs>): Prisma.PrismaPromise<GetBossQuestionAggregateType<T>>

    /**
     * Group by BossQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BossQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BossQuestionGroupByArgs['orderBy'] }
        : { orderBy?: BossQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BossQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBossQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BossQuestion model
   */
  readonly fields: BossQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BossQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BossQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boss<T extends BossDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BossDefaultArgs<ExtArgs>>): Prisma__BossClient<$Result.GetResult<Prisma.$BossPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BossQuestion model
   */
  interface BossQuestionFieldRefs {
    readonly id: FieldRef<"BossQuestion", 'String'>
    readonly bossId: FieldRef<"BossQuestion", 'String'>
    readonly questionId: FieldRef<"BossQuestion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BossQuestion findUnique
   */
  export type BossQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BossQuestion to fetch.
     */
    where: BossQuestionWhereUniqueInput
  }

  /**
   * BossQuestion findUniqueOrThrow
   */
  export type BossQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BossQuestion to fetch.
     */
    where: BossQuestionWhereUniqueInput
  }

  /**
   * BossQuestion findFirst
   */
  export type BossQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BossQuestion to fetch.
     */
    where?: BossQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BossQuestions to fetch.
     */
    orderBy?: BossQuestionOrderByWithRelationInput | BossQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BossQuestions.
     */
    cursor?: BossQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BossQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BossQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BossQuestions.
     */
    distinct?: BossQuestionScalarFieldEnum | BossQuestionScalarFieldEnum[]
  }

  /**
   * BossQuestion findFirstOrThrow
   */
  export type BossQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BossQuestion to fetch.
     */
    where?: BossQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BossQuestions to fetch.
     */
    orderBy?: BossQuestionOrderByWithRelationInput | BossQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BossQuestions.
     */
    cursor?: BossQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BossQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BossQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BossQuestions.
     */
    distinct?: BossQuestionScalarFieldEnum | BossQuestionScalarFieldEnum[]
  }

  /**
   * BossQuestion findMany
   */
  export type BossQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BossQuestions to fetch.
     */
    where?: BossQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BossQuestions to fetch.
     */
    orderBy?: BossQuestionOrderByWithRelationInput | BossQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BossQuestions.
     */
    cursor?: BossQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BossQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BossQuestions.
     */
    skip?: number
    distinct?: BossQuestionScalarFieldEnum | BossQuestionScalarFieldEnum[]
  }

  /**
   * BossQuestion create
   */
  export type BossQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a BossQuestion.
     */
    data: XOR<BossQuestionCreateInput, BossQuestionUncheckedCreateInput>
  }

  /**
   * BossQuestion createMany
   */
  export type BossQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BossQuestions.
     */
    data: BossQuestionCreateManyInput | BossQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BossQuestion createManyAndReturn
   */
  export type BossQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many BossQuestions.
     */
    data: BossQuestionCreateManyInput | BossQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BossQuestion update
   */
  export type BossQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a BossQuestion.
     */
    data: XOR<BossQuestionUpdateInput, BossQuestionUncheckedUpdateInput>
    /**
     * Choose, which BossQuestion to update.
     */
    where: BossQuestionWhereUniqueInput
  }

  /**
   * BossQuestion updateMany
   */
  export type BossQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BossQuestions.
     */
    data: XOR<BossQuestionUpdateManyMutationInput, BossQuestionUncheckedUpdateManyInput>
    /**
     * Filter which BossQuestions to update
     */
    where?: BossQuestionWhereInput
    /**
     * Limit how many BossQuestions to update.
     */
    limit?: number
  }

  /**
   * BossQuestion updateManyAndReturn
   */
  export type BossQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * The data used to update BossQuestions.
     */
    data: XOR<BossQuestionUpdateManyMutationInput, BossQuestionUncheckedUpdateManyInput>
    /**
     * Filter which BossQuestions to update
     */
    where?: BossQuestionWhereInput
    /**
     * Limit how many BossQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BossQuestion upsert
   */
  export type BossQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the BossQuestion to update in case it exists.
     */
    where: BossQuestionWhereUniqueInput
    /**
     * In case the BossQuestion found by the `where` argument doesn't exist, create a new BossQuestion with this data.
     */
    create: XOR<BossQuestionCreateInput, BossQuestionUncheckedCreateInput>
    /**
     * In case the BossQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BossQuestionUpdateInput, BossQuestionUncheckedUpdateInput>
  }

  /**
   * BossQuestion delete
   */
  export type BossQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
    /**
     * Filter which BossQuestion to delete.
     */
    where: BossQuestionWhereUniqueInput
  }

  /**
   * BossQuestion deleteMany
   */
  export type BossQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BossQuestions to delete
     */
    where?: BossQuestionWhereInput
    /**
     * Limit how many BossQuestions to delete.
     */
    limit?: number
  }

  /**
   * BossQuestion without action
   */
  export type BossQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossQuestion
     */
    select?: BossQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BossQuestion
     */
    omit?: BossQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BossQuestionInclude<ExtArgs> | null
  }


  /**
   * Model UserStats
   */

  export type AggregateUserStats = {
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  export type UserStatsAvgAggregateOutputType = {
    totalGamesPlayed: number | null
    totalBossesDefeated: number | null
    totalCorrectAnswers: number | null
    totalQuestions: number | null
    longestStreak: number | null
    currentStreak: number | null
    averageScore: number | null
    totalTimeSpent: number | null
  }

  export type UserStatsSumAggregateOutputType = {
    totalGamesPlayed: number | null
    totalBossesDefeated: number | null
    totalCorrectAnswers: number | null
    totalQuestions: number | null
    longestStreak: number | null
    currentStreak: number | null
    averageScore: number | null
    totalTimeSpent: number | null
  }

  export type UserStatsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalGamesPlayed: number | null
    totalBossesDefeated: number | null
    totalCorrectAnswers: number | null
    totalQuestions: number | null
    longestStreak: number | null
    currentStreak: number | null
    averageScore: number | null
    totalTimeSpent: number | null
    favoriteSubject: $Enums.Subject | null
    lastPlayedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStatsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalGamesPlayed: number | null
    totalBossesDefeated: number | null
    totalCorrectAnswers: number | null
    totalQuestions: number | null
    longestStreak: number | null
    currentStreak: number | null
    averageScore: number | null
    totalTimeSpent: number | null
    favoriteSubject: $Enums.Subject | null
    lastPlayedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStatsCountAggregateOutputType = {
    id: number
    userId: number
    totalGamesPlayed: number
    totalBossesDefeated: number
    totalCorrectAnswers: number
    totalQuestions: number
    longestStreak: number
    currentStreak: number
    averageScore: number
    totalTimeSpent: number
    favoriteSubject: number
    lastPlayedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserStatsAvgAggregateInputType = {
    totalGamesPlayed?: true
    totalBossesDefeated?: true
    totalCorrectAnswers?: true
    totalQuestions?: true
    longestStreak?: true
    currentStreak?: true
    averageScore?: true
    totalTimeSpent?: true
  }

  export type UserStatsSumAggregateInputType = {
    totalGamesPlayed?: true
    totalBossesDefeated?: true
    totalCorrectAnswers?: true
    totalQuestions?: true
    longestStreak?: true
    currentStreak?: true
    averageScore?: true
    totalTimeSpent?: true
  }

  export type UserStatsMinAggregateInputType = {
    id?: true
    userId?: true
    totalGamesPlayed?: true
    totalBossesDefeated?: true
    totalCorrectAnswers?: true
    totalQuestions?: true
    longestStreak?: true
    currentStreak?: true
    averageScore?: true
    totalTimeSpent?: true
    favoriteSubject?: true
    lastPlayedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStatsMaxAggregateInputType = {
    id?: true
    userId?: true
    totalGamesPlayed?: true
    totalBossesDefeated?: true
    totalCorrectAnswers?: true
    totalQuestions?: true
    longestStreak?: true
    currentStreak?: true
    averageScore?: true
    totalTimeSpent?: true
    favoriteSubject?: true
    lastPlayedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStatsCountAggregateInputType = {
    id?: true
    userId?: true
    totalGamesPlayed?: true
    totalBossesDefeated?: true
    totalCorrectAnswers?: true
    totalQuestions?: true
    longestStreak?: true
    currentStreak?: true
    averageScore?: true
    totalTimeSpent?: true
    favoriteSubject?: true
    lastPlayedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to aggregate.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStats
    **/
    _count?: true | UserStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatsMaxAggregateInputType
  }

  export type GetUserStatsAggregateType<T extends UserStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStats[P]>
      : GetScalarType<T[P], AggregateUserStats[P]>
  }




  export type UserStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatsWhereInput
    orderBy?: UserStatsOrderByWithAggregationInput | UserStatsOrderByWithAggregationInput[]
    by: UserStatsScalarFieldEnum[] | UserStatsScalarFieldEnum
    having?: UserStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatsCountAggregateInputType | true
    _avg?: UserStatsAvgAggregateInputType
    _sum?: UserStatsSumAggregateInputType
    _min?: UserStatsMinAggregateInputType
    _max?: UserStatsMaxAggregateInputType
  }

  export type UserStatsGroupByOutputType = {
    id: string
    userId: string
    totalGamesPlayed: number
    totalBossesDefeated: number
    totalCorrectAnswers: number
    totalQuestions: number
    longestStreak: number
    currentStreak: number
    averageScore: number
    totalTimeSpent: number
    favoriteSubject: $Enums.Subject | null
    lastPlayedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  type GetUserStatsGroupByPayload<T extends UserStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
        }
      >
    >


  export type UserStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalGamesPlayed?: boolean
    totalBossesDefeated?: boolean
    totalCorrectAnswers?: boolean
    totalQuestions?: boolean
    longestStreak?: boolean
    currentStreak?: boolean
    averageScore?: boolean
    totalTimeSpent?: boolean
    favoriteSubject?: boolean
    lastPlayedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalGamesPlayed?: boolean
    totalBossesDefeated?: boolean
    totalCorrectAnswers?: boolean
    totalQuestions?: boolean
    longestStreak?: boolean
    currentStreak?: boolean
    averageScore?: boolean
    totalTimeSpent?: boolean
    favoriteSubject?: boolean
    lastPlayedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalGamesPlayed?: boolean
    totalBossesDefeated?: boolean
    totalCorrectAnswers?: boolean
    totalQuestions?: boolean
    longestStreak?: boolean
    currentStreak?: boolean
    averageScore?: boolean
    totalTimeSpent?: boolean
    favoriteSubject?: boolean
    lastPlayedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectScalar = {
    id?: boolean
    userId?: boolean
    totalGamesPlayed?: boolean
    totalBossesDefeated?: boolean
    totalCorrectAnswers?: boolean
    totalQuestions?: boolean
    longestStreak?: boolean
    currentStreak?: boolean
    averageScore?: boolean
    totalTimeSpent?: boolean
    favoriteSubject?: boolean
    lastPlayedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalGamesPlayed" | "totalBossesDefeated" | "totalCorrectAnswers" | "totalQuestions" | "longestStreak" | "currentStreak" | "averageScore" | "totalTimeSpent" | "favoriteSubject" | "lastPlayedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userStats"]>
  export type UserStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      totalGamesPlayed: number
      totalBossesDefeated: number
      totalCorrectAnswers: number
      totalQuestions: number
      longestStreak: number
      currentStreak: number
      averageScore: number
      totalTimeSpent: number
      favoriteSubject: $Enums.Subject | null
      lastPlayedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userStats"]>
    composites: {}
  }

  type UserStatsGetPayload<S extends boolean | null | undefined | UserStatsDefaultArgs> = $Result.GetResult<Prisma.$UserStatsPayload, S>

  type UserStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStatsCountAggregateInputType | true
    }

  export interface UserStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStats'], meta: { name: 'UserStats' } }
    /**
     * Find zero or one UserStats that matches the filter.
     * @param {UserStatsFindUniqueArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStatsFindUniqueArgs>(args: SelectSubset<T, UserStatsFindUniqueArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStatsFindUniqueOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStatsFindFirstArgs>(args?: SelectSubset<T, UserStatsFindFirstArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStats
     * const userStats = await prisma.userStats.findMany()
     * 
     * // Get first 10 UserStats
     * const userStats = await prisma.userStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStatsWithIdOnly = await prisma.userStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStatsFindManyArgs>(args?: SelectSubset<T, UserStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStats.
     * @param {UserStatsCreateArgs} args - Arguments to create a UserStats.
     * @example
     * // Create one UserStats
     * const UserStats = await prisma.userStats.create({
     *   data: {
     *     // ... data to create a UserStats
     *   }
     * })
     * 
     */
    create<T extends UserStatsCreateArgs>(args: SelectSubset<T, UserStatsCreateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStats.
     * @param {UserStatsCreateManyArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStatsCreateManyArgs>(args?: SelectSubset<T, UserStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStats and returns the data saved in the database.
     * @param {UserStatsCreateManyAndReturnArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStats and only return the `id`
     * const userStatsWithIdOnly = await prisma.userStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserStats.
     * @param {UserStatsDeleteArgs} args - Arguments to delete one UserStats.
     * @example
     * // Delete one UserStats
     * const UserStats = await prisma.userStats.delete({
     *   where: {
     *     // ... filter to delete one UserStats
     *   }
     * })
     * 
     */
    delete<T extends UserStatsDeleteArgs>(args: SelectSubset<T, UserStatsDeleteArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStats.
     * @param {UserStatsUpdateArgs} args - Arguments to update one UserStats.
     * @example
     * // Update one UserStats
     * const userStats = await prisma.userStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStatsUpdateArgs>(args: SelectSubset<T, UserStatsUpdateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStats.
     * @param {UserStatsDeleteManyArgs} args - Arguments to filter UserStats to delete.
     * @example
     * // Delete a few UserStats
     * const { count } = await prisma.userStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStatsDeleteManyArgs>(args?: SelectSubset<T, UserStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStatsUpdateManyArgs>(args: SelectSubset<T, UserStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats and returns the data updated in the database.
     * @param {UserStatsUpdateManyAndReturnArgs} args - Arguments to update many UserStats.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserStats and only return the `id`
     * const userStatsWithIdOnly = await prisma.userStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserStats.
     * @param {UserStatsUpsertArgs} args - Arguments to update or create a UserStats.
     * @example
     * // Update or create a UserStats
     * const userStats = await prisma.userStats.upsert({
     *   create: {
     *     // ... data to create a UserStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStats we want to update
     *   }
     * })
     */
    upsert<T extends UserStatsUpsertArgs>(args: SelectSubset<T, UserStatsUpsertArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsCountArgs} args - Arguments to filter UserStats to count.
     * @example
     * // Count the number of UserStats
     * const count = await prisma.userStats.count({
     *   where: {
     *     // ... the filter for the UserStats we want to count
     *   }
     * })
    **/
    count<T extends UserStatsCountArgs>(
      args?: Subset<T, UserStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStatsAggregateArgs>(args: Subset<T, UserStatsAggregateArgs>): Prisma.PrismaPromise<GetUserStatsAggregateType<T>>

    /**
     * Group by UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatsGroupByArgs['orderBy'] }
        : { orderBy?: UserStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStats model
   */
  readonly fields: UserStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserStats model
   */
  interface UserStatsFieldRefs {
    readonly id: FieldRef<"UserStats", 'String'>
    readonly userId: FieldRef<"UserStats", 'String'>
    readonly totalGamesPlayed: FieldRef<"UserStats", 'Int'>
    readonly totalBossesDefeated: FieldRef<"UserStats", 'Int'>
    readonly totalCorrectAnswers: FieldRef<"UserStats", 'Int'>
    readonly totalQuestions: FieldRef<"UserStats", 'Int'>
    readonly longestStreak: FieldRef<"UserStats", 'Int'>
    readonly currentStreak: FieldRef<"UserStats", 'Int'>
    readonly averageScore: FieldRef<"UserStats", 'Float'>
    readonly totalTimeSpent: FieldRef<"UserStats", 'Int'>
    readonly favoriteSubject: FieldRef<"UserStats", 'Subject'>
    readonly lastPlayedAt: FieldRef<"UserStats", 'DateTime'>
    readonly createdAt: FieldRef<"UserStats", 'DateTime'>
    readonly updatedAt: FieldRef<"UserStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStats findUnique
   */
  export type UserStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findUniqueOrThrow
   */
  export type UserStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findFirst
   */
  export type UserStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findFirstOrThrow
   */
  export type UserStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findMany
   */
  export type UserStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats create
   */
  export type UserStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStats.
     */
    data: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
  }

  /**
   * UserStats createMany
   */
  export type UserStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStats createManyAndReturn
   */
  export type UserStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStats update
   */
  export type UserStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStats.
     */
    data: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
    /**
     * Choose, which UserStats to update.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats updateMany
   */
  export type UserStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
  }

  /**
   * UserStats updateManyAndReturn
   */
  export type UserStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStats upsert
   */
  export type UserStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStats to update in case it exists.
     */
    where: UserStatsWhereUniqueInput
    /**
     * In case the UserStats found by the `where` argument doesn't exist, create a new UserStats with this data.
     */
    create: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
    /**
     * In case the UserStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
  }

  /**
   * UserStats delete
   */
  export type UserStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
    /**
     * Filter which UserStats to delete.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats deleteMany
   */
  export type UserStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to delete
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to delete.
     */
    limit?: number
  }

  /**
   * UserStats without action
   */
  export type UserStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatsInclude<ExtArgs> | null
  }


  /**
   * Model Leaderboard
   */

  export type AggregateLeaderboard = {
    _count: LeaderboardCountAggregateOutputType | null
    _avg: LeaderboardAvgAggregateOutputType | null
    _sum: LeaderboardSumAggregateOutputType | null
    _min: LeaderboardMinAggregateOutputType | null
    _max: LeaderboardMaxAggregateOutputType | null
  }

  export type LeaderboardAvgAggregateOutputType = {
    knowledgePoints: number | null
    level: number | null
    totalGamesPlayed: number | null
    bossesDefeated: number | null
    rank: number | null
  }

  export type LeaderboardSumAggregateOutputType = {
    knowledgePoints: number | null
    level: number | null
    totalGamesPlayed: number | null
    bossesDefeated: number | null
    rank: number | null
  }

  export type LeaderboardMinAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    knowledgePoints: number | null
    level: number | null
    totalGamesPlayed: number | null
    bossesDefeated: number | null
    rank: number | null
    period: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaderboardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    knowledgePoints: number | null
    level: number | null
    totalGamesPlayed: number | null
    bossesDefeated: number | null
    rank: number | null
    period: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaderboardCountAggregateOutputType = {
    id: number
    userId: number
    username: number
    knowledgePoints: number
    level: number
    totalGamesPlayed: number
    bossesDefeated: number
    rank: number
    period: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaderboardAvgAggregateInputType = {
    knowledgePoints?: true
    level?: true
    totalGamesPlayed?: true
    bossesDefeated?: true
    rank?: true
  }

  export type LeaderboardSumAggregateInputType = {
    knowledgePoints?: true
    level?: true
    totalGamesPlayed?: true
    bossesDefeated?: true
    rank?: true
  }

  export type LeaderboardMinAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    knowledgePoints?: true
    level?: true
    totalGamesPlayed?: true
    bossesDefeated?: true
    rank?: true
    period?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaderboardMaxAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    knowledgePoints?: true
    level?: true
    totalGamesPlayed?: true
    bossesDefeated?: true
    rank?: true
    period?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaderboardCountAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    knowledgePoints?: true
    level?: true
    totalGamesPlayed?: true
    bossesDefeated?: true
    rank?: true
    period?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaderboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaderboard to aggregate.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaderboards
    **/
    _count?: true | LeaderboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaderboardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaderboardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderboardMaxAggregateInputType
  }

  export type GetLeaderboardAggregateType<T extends LeaderboardAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderboard[P]>
      : GetScalarType<T[P], AggregateLeaderboard[P]>
  }




  export type LeaderboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardWhereInput
    orderBy?: LeaderboardOrderByWithAggregationInput | LeaderboardOrderByWithAggregationInput[]
    by: LeaderboardScalarFieldEnum[] | LeaderboardScalarFieldEnum
    having?: LeaderboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderboardCountAggregateInputType | true
    _avg?: LeaderboardAvgAggregateInputType
    _sum?: LeaderboardSumAggregateInputType
    _min?: LeaderboardMinAggregateInputType
    _max?: LeaderboardMaxAggregateInputType
  }

  export type LeaderboardGroupByOutputType = {
    id: string
    userId: string
    username: string
    knowledgePoints: number
    level: number
    totalGamesPlayed: number
    bossesDefeated: number
    rank: number
    period: string
    createdAt: Date
    updatedAt: Date
    _count: LeaderboardCountAggregateOutputType | null
    _avg: LeaderboardAvgAggregateOutputType | null
    _sum: LeaderboardSumAggregateOutputType | null
    _min: LeaderboardMinAggregateOutputType | null
    _max: LeaderboardMaxAggregateOutputType | null
  }

  type GetLeaderboardGroupByPayload<T extends LeaderboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderboardGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderboardGroupByOutputType[P]>
        }
      >
    >


  export type LeaderboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    knowledgePoints?: boolean
    level?: boolean
    totalGamesPlayed?: boolean
    bossesDefeated?: boolean
    rank?: boolean
    period?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["leaderboard"]>

  export type LeaderboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    knowledgePoints?: boolean
    level?: boolean
    totalGamesPlayed?: boolean
    bossesDefeated?: boolean
    rank?: boolean
    period?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["leaderboard"]>

  export type LeaderboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    knowledgePoints?: boolean
    level?: boolean
    totalGamesPlayed?: boolean
    bossesDefeated?: boolean
    rank?: boolean
    period?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["leaderboard"]>

  export type LeaderboardSelectScalar = {
    id?: boolean
    userId?: boolean
    username?: boolean
    knowledgePoints?: boolean
    level?: boolean
    totalGamesPlayed?: boolean
    bossesDefeated?: boolean
    rank?: boolean
    period?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaderboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "username" | "knowledgePoints" | "level" | "totalGamesPlayed" | "bossesDefeated" | "rank" | "period" | "createdAt" | "updatedAt", ExtArgs["result"]["leaderboard"]>

  export type $LeaderboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leaderboard"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      username: string
      knowledgePoints: number
      level: number
      totalGamesPlayed: number
      bossesDefeated: number
      rank: number
      period: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leaderboard"]>
    composites: {}
  }

  type LeaderboardGetPayload<S extends boolean | null | undefined | LeaderboardDefaultArgs> = $Result.GetResult<Prisma.$LeaderboardPayload, S>

  type LeaderboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderboardCountAggregateInputType | true
    }

  export interface LeaderboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leaderboard'], meta: { name: 'Leaderboard' } }
    /**
     * Find zero or one Leaderboard that matches the filter.
     * @param {LeaderboardFindUniqueArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderboardFindUniqueArgs>(args: SelectSubset<T, LeaderboardFindUniqueArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leaderboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderboardFindUniqueOrThrowArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderboardFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaderboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardFindFirstArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderboardFindFirstArgs>(args?: SelectSubset<T, LeaderboardFindFirstArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaderboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardFindFirstOrThrowArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderboardFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leaderboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaderboards
     * const leaderboards = await prisma.leaderboard.findMany()
     * 
     * // Get first 10 Leaderboards
     * const leaderboards = await prisma.leaderboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderboardWithIdOnly = await prisma.leaderboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderboardFindManyArgs>(args?: SelectSubset<T, LeaderboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leaderboard.
     * @param {LeaderboardCreateArgs} args - Arguments to create a Leaderboard.
     * @example
     * // Create one Leaderboard
     * const Leaderboard = await prisma.leaderboard.create({
     *   data: {
     *     // ... data to create a Leaderboard
     *   }
     * })
     * 
     */
    create<T extends LeaderboardCreateArgs>(args: SelectSubset<T, LeaderboardCreateArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leaderboards.
     * @param {LeaderboardCreateManyArgs} args - Arguments to create many Leaderboards.
     * @example
     * // Create many Leaderboards
     * const leaderboard = await prisma.leaderboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderboardCreateManyArgs>(args?: SelectSubset<T, LeaderboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaderboards and returns the data saved in the database.
     * @param {LeaderboardCreateManyAndReturnArgs} args - Arguments to create many Leaderboards.
     * @example
     * // Create many Leaderboards
     * const leaderboard = await prisma.leaderboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaderboards and only return the `id`
     * const leaderboardWithIdOnly = await prisma.leaderboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderboardCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leaderboard.
     * @param {LeaderboardDeleteArgs} args - Arguments to delete one Leaderboard.
     * @example
     * // Delete one Leaderboard
     * const Leaderboard = await prisma.leaderboard.delete({
     *   where: {
     *     // ... filter to delete one Leaderboard
     *   }
     * })
     * 
     */
    delete<T extends LeaderboardDeleteArgs>(args: SelectSubset<T, LeaderboardDeleteArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leaderboard.
     * @param {LeaderboardUpdateArgs} args - Arguments to update one Leaderboard.
     * @example
     * // Update one Leaderboard
     * const leaderboard = await prisma.leaderboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderboardUpdateArgs>(args: SelectSubset<T, LeaderboardUpdateArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leaderboards.
     * @param {LeaderboardDeleteManyArgs} args - Arguments to filter Leaderboards to delete.
     * @example
     * // Delete a few Leaderboards
     * const { count } = await prisma.leaderboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderboardDeleteManyArgs>(args?: SelectSubset<T, LeaderboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaderboards
     * const leaderboard = await prisma.leaderboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderboardUpdateManyArgs>(args: SelectSubset<T, LeaderboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaderboards and returns the data updated in the database.
     * @param {LeaderboardUpdateManyAndReturnArgs} args - Arguments to update many Leaderboards.
     * @example
     * // Update many Leaderboards
     * const leaderboard = await prisma.leaderboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leaderboards and only return the `id`
     * const leaderboardWithIdOnly = await prisma.leaderboard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaderboardUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leaderboard.
     * @param {LeaderboardUpsertArgs} args - Arguments to update or create a Leaderboard.
     * @example
     * // Update or create a Leaderboard
     * const leaderboard = await prisma.leaderboard.upsert({
     *   create: {
     *     // ... data to create a Leaderboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leaderboard we want to update
     *   }
     * })
     */
    upsert<T extends LeaderboardUpsertArgs>(args: SelectSubset<T, LeaderboardUpsertArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardCountArgs} args - Arguments to filter Leaderboards to count.
     * @example
     * // Count the number of Leaderboards
     * const count = await prisma.leaderboard.count({
     *   where: {
     *     // ... the filter for the Leaderboards we want to count
     *   }
     * })
    **/
    count<T extends LeaderboardCountArgs>(
      args?: Subset<T, LeaderboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaderboardAggregateArgs>(args: Subset<T, LeaderboardAggregateArgs>): Prisma.PrismaPromise<GetLeaderboardAggregateType<T>>

    /**
     * Group by Leaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaderboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderboardGroupByArgs['orderBy'] }
        : { orderBy?: LeaderboardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaderboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leaderboard model
   */
  readonly fields: LeaderboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leaderboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Leaderboard model
   */
  interface LeaderboardFieldRefs {
    readonly id: FieldRef<"Leaderboard", 'String'>
    readonly userId: FieldRef<"Leaderboard", 'String'>
    readonly username: FieldRef<"Leaderboard", 'String'>
    readonly knowledgePoints: FieldRef<"Leaderboard", 'Int'>
    readonly level: FieldRef<"Leaderboard", 'Int'>
    readonly totalGamesPlayed: FieldRef<"Leaderboard", 'Int'>
    readonly bossesDefeated: FieldRef<"Leaderboard", 'Int'>
    readonly rank: FieldRef<"Leaderboard", 'Int'>
    readonly period: FieldRef<"Leaderboard", 'String'>
    readonly createdAt: FieldRef<"Leaderboard", 'DateTime'>
    readonly updatedAt: FieldRef<"Leaderboard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leaderboard findUnique
   */
  export type LeaderboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard findUniqueOrThrow
   */
  export type LeaderboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard findFirst
   */
  export type LeaderboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaderboards.
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaderboards.
     */
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * Leaderboard findFirstOrThrow
   */
  export type LeaderboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaderboards.
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaderboards.
     */
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * Leaderboard findMany
   */
  export type LeaderboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Filter, which Leaderboards to fetch.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaderboards.
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * Leaderboard create
   */
  export type LeaderboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * The data needed to create a Leaderboard.
     */
    data: XOR<LeaderboardCreateInput, LeaderboardUncheckedCreateInput>
  }

  /**
   * Leaderboard createMany
   */
  export type LeaderboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaderboards.
     */
    data: LeaderboardCreateManyInput | LeaderboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leaderboard createManyAndReturn
   */
  export type LeaderboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * The data used to create many Leaderboards.
     */
    data: LeaderboardCreateManyInput | LeaderboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leaderboard update
   */
  export type LeaderboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * The data needed to update a Leaderboard.
     */
    data: XOR<LeaderboardUpdateInput, LeaderboardUncheckedUpdateInput>
    /**
     * Choose, which Leaderboard to update.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard updateMany
   */
  export type LeaderboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaderboards.
     */
    data: XOR<LeaderboardUpdateManyMutationInput, LeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which Leaderboards to update
     */
    where?: LeaderboardWhereInput
    /**
     * Limit how many Leaderboards to update.
     */
    limit?: number
  }

  /**
   * Leaderboard updateManyAndReturn
   */
  export type LeaderboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * The data used to update Leaderboards.
     */
    data: XOR<LeaderboardUpdateManyMutationInput, LeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which Leaderboards to update
     */
    where?: LeaderboardWhereInput
    /**
     * Limit how many Leaderboards to update.
     */
    limit?: number
  }

  /**
   * Leaderboard upsert
   */
  export type LeaderboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * The filter to search for the Leaderboard to update in case it exists.
     */
    where: LeaderboardWhereUniqueInput
    /**
     * In case the Leaderboard found by the `where` argument doesn't exist, create a new Leaderboard with this data.
     */
    create: XOR<LeaderboardCreateInput, LeaderboardUncheckedCreateInput>
    /**
     * In case the Leaderboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderboardUpdateInput, LeaderboardUncheckedUpdateInput>
  }

  /**
   * Leaderboard delete
   */
  export type LeaderboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Filter which Leaderboard to delete.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard deleteMany
   */
  export type LeaderboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaderboards to delete
     */
    where?: LeaderboardWhereInput
    /**
     * Limit how many Leaderboards to delete.
     */
    limit?: number
  }

  /**
   * Leaderboard without action
   */
  export type LeaderboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
  }


  /**
   * Model SystemSettings
   */

  export type AggregateSystemSettings = {
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  export type SystemSettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SystemSettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SystemSettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingsMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
  }

  export type SystemSettingsMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
  }

  export type SystemSettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to aggregate.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type GetSystemSettingsAggregateType<T extends SystemSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSettings[P]>
      : GetScalarType<T[P], AggregateSystemSettings[P]>
  }




  export type SystemSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingsWhereInput
    orderBy?: SystemSettingsOrderByWithAggregationInput | SystemSettingsOrderByWithAggregationInput[]
    by: SystemSettingsScalarFieldEnum[] | SystemSettingsScalarFieldEnum
    having?: SystemSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingsCountAggregateInputType | true
    _min?: SystemSettingsMinAggregateInputType
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type SystemSettingsGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string | null
    updatedAt: Date
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  type GetSystemSettingsGroupByPayload<T extends SystemSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }

  export type SystemSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description" | "updatedAt", ExtArgs["result"]["systemSettings"]>

  export type $SystemSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string | null
      updatedAt: Date
    }, ExtArgs["result"]["systemSettings"]>
    composites: {}
  }

  type SystemSettingsGetPayload<S extends boolean | null | undefined | SystemSettingsDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingsPayload, S>

  type SystemSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingsCountAggregateInputType | true
    }

  export interface SystemSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSettings'], meta: { name: 'SystemSettings' } }
    /**
     * Find zero or one SystemSettings that matches the filter.
     * @param {SystemSettingsFindUniqueArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingsFindUniqueArgs>(args: SelectSubset<T, SystemSettingsFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingsFindUniqueOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingsFindFirstArgs>(args?: SelectSubset<T, SystemSettingsFindFirstArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingsFindManyArgs>(args?: SelectSubset<T, SystemSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSettings.
     * @param {SystemSettingsCreateArgs} args - Arguments to create a SystemSettings.
     * @example
     * // Create one SystemSettings
     * const SystemSettings = await prisma.systemSettings.create({
     *   data: {
     *     // ... data to create a SystemSettings
     *   }
     * })
     * 
     */
    create<T extends SystemSettingsCreateArgs>(args: SelectSubset<T, SystemSettingsCreateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingsCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingsCreateManyArgs>(args?: SelectSubset<T, SystemSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingsCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSettings.
     * @param {SystemSettingsDeleteArgs} args - Arguments to delete one SystemSettings.
     * @example
     * // Delete one SystemSettings
     * const SystemSettings = await prisma.systemSettings.delete({
     *   where: {
     *     // ... filter to delete one SystemSettings
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingsDeleteArgs>(args: SelectSubset<T, SystemSettingsDeleteArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSettings.
     * @param {SystemSettingsUpdateArgs} args - Arguments to update one SystemSettings.
     * @example
     * // Update one SystemSettings
     * const systemSettings = await prisma.systemSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingsUpdateArgs>(args: SelectSubset<T, SystemSettingsUpdateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingsDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingsDeleteManyArgs>(args?: SelectSubset<T, SystemSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingsUpdateManyArgs>(args: SelectSubset<T, SystemSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingsUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSettings.
     * @param {SystemSettingsUpsertArgs} args - Arguments to update or create a SystemSettings.
     * @example
     * // Update or create a SystemSettings
     * const systemSettings = await prisma.systemSettings.upsert({
     *   create: {
     *     // ... data to create a SystemSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSettings we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingsUpsertArgs>(args: SelectSubset<T, SystemSettingsUpsertArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSettings.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingsCountArgs>(
      args?: Subset<T, SystemSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemSettingsAggregateArgs>(args: Subset<T, SystemSettingsAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingsAggregateType<T>>

    /**
     * Group by SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSettings model
   */
  readonly fields: SystemSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemSettings model
   */
  interface SystemSettingsFieldRefs {
    readonly id: FieldRef<"SystemSettings", 'String'>
    readonly key: FieldRef<"SystemSettings", 'String'>
    readonly value: FieldRef<"SystemSettings", 'String'>
    readonly description: FieldRef<"SystemSettings", 'String'>
    readonly updatedAt: FieldRef<"SystemSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSettings findUnique
   */
  export type SystemSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findUniqueOrThrow
   */
  export type SystemSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findFirst
   */
  export type SystemSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findFirstOrThrow
   */
  export type SystemSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findMany
   */
  export type SystemSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings create
   */
  export type SystemSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSettings.
     */
    data: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
  }

  /**
   * SystemSettings createMany
   */
  export type SystemSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings createManyAndReturn
   */
  export type SystemSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings update
   */
  export type SystemSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSettings.
     */
    data: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
    /**
     * Choose, which SystemSettings to update.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings updateMany
   */
  export type SystemSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings updateManyAndReturn
   */
  export type SystemSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings upsert
   */
  export type SystemSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSettings to update in case it exists.
     */
    where: SystemSettingsWhereUniqueInput
    /**
     * In case the SystemSettings found by the `where` argument doesn't exist, create a new SystemSettings with this data.
     */
    create: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
    /**
     * In case the SystemSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
  }

  /**
   * SystemSettings delete
   */
  export type SystemSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter which SystemSettings to delete.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings deleteMany
   */
  export type SystemSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSettings without action
   */
  export type SystemSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    fullName: 'fullName',
    role: 'role',
    avatar: 'avatar',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    school: 'school',
    grade: 'grade',
    knowledgePoints: 'knowledgePoints',
    level: 'level',
    experience: 'experience',
    businessName: 'businessName',
    businessType: 'businessType',
    contactPhone: 'contactPhone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    question: 'question',
    optionA: 'optionA',
    optionB: 'optionB',
    optionC: 'optionC',
    optionD: 'optionD',
    correctAnswer: 'correctAnswer',
    explanation: 'explanation',
    subject: 'subject',
    difficulty: 'difficulty',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    difficulty: 'difficulty',
    subject: 'subject',
    currentQuestion: 'currentQuestion',
    totalQuestions: 'totalQuestions',
    score: 'score',
    knowledgePointsEarned: 'knowledgePointsEarned',
    timeStarted: 'timeStarted',
    timeCompleted: 'timeCompleted',
    bossDefeated: 'bossDefeated',
    bossHp: 'bossHp',
    bossMaxHp: 'bossMaxHp',
    timerBonus: 'timerBonus',
    shieldActive: 'shieldActive',
    kpMultiplier: 'kpMultiplier'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GameAnswerScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    questionId: 'questionId',
    userId: 'userId',
    selectedAnswer: 'selectedAnswer',
    isCorrect: 'isCorrect',
    timeSpent: 'timeSpent',
    knowledgePointsEarned: 'knowledgePointsEarned',
    answeredAt: 'answeredAt'
  };

  export type GameAnswerScalarFieldEnum = (typeof GameAnswerScalarFieldEnum)[keyof typeof GameAnswerScalarFieldEnum]


  export const RewardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    knowledgePointsCost: 'knowledgePointsCost',
    imageUrl: 'imageUrl',
    category: 'category',
    isActive: 'isActive',
    stockQuantity: 'stockQuantity',
    vendorId: 'vendorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RewardScalarFieldEnum = (typeof RewardScalarFieldEnum)[keyof typeof RewardScalarFieldEnum]


  export const UserRewardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rewardId: 'rewardId',
    status: 'status',
    qrCode: 'qrCode',
    redeemedAt: 'redeemedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type UserRewardScalarFieldEnum = (typeof UserRewardScalarFieldEnum)[keyof typeof UserRewardScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    rarity: 'rarity',
    knowledgePointsCost: 'knowledgePointsCost',
    abilities: 'abilities',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const UserPetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    petId: 'petId',
    nickname: 'nickname',
    level: 'level',
    experience: 'experience',
    isActive: 'isActive',
    acquiredAt: 'acquiredAt'
  };

  export type UserPetScalarFieldEnum = (typeof UserPetScalarFieldEnum)[keyof typeof UserPetScalarFieldEnum]


  export const BossScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    baseHp: 'baseHp',
    hpPerLevel: 'hpPerLevel',
    difficulty: 'difficulty',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type BossScalarFieldEnum = (typeof BossScalarFieldEnum)[keyof typeof BossScalarFieldEnum]


  export const BossQuestionScalarFieldEnum: {
    id: 'id',
    bossId: 'bossId',
    questionId: 'questionId'
  };

  export type BossQuestionScalarFieldEnum = (typeof BossQuestionScalarFieldEnum)[keyof typeof BossQuestionScalarFieldEnum]


  export const UserStatsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalGamesPlayed: 'totalGamesPlayed',
    totalBossesDefeated: 'totalBossesDefeated',
    totalCorrectAnswers: 'totalCorrectAnswers',
    totalQuestions: 'totalQuestions',
    longestStreak: 'longestStreak',
    currentStreak: 'currentStreak',
    averageScore: 'averageScore',
    totalTimeSpent: 'totalTimeSpent',
    favoriteSubject: 'favoriteSubject',
    lastPlayedAt: 'lastPlayedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserStatsScalarFieldEnum = (typeof UserStatsScalarFieldEnum)[keyof typeof UserStatsScalarFieldEnum]


  export const LeaderboardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    username: 'username',
    knowledgePoints: 'knowledgePoints',
    level: 'level',
    totalGamesPlayed: 'totalGamesPlayed',
    bossesDefeated: 'bossesDefeated',
    rank: 'rank',
    period: 'period',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaderboardScalarFieldEnum = (typeof LeaderboardScalarFieldEnum)[keyof typeof LeaderboardScalarFieldEnum]


  export const SystemSettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingsScalarFieldEnum = (typeof SystemSettingsScalarFieldEnum)[keyof typeof SystemSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Subject'
   */
  export type EnumSubjectFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subject'>
    


  /**
   * Reference to a field of type 'Subject[]'
   */
  export type ListEnumSubjectFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subject[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RewardStatus'
   */
  export type EnumRewardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardStatus'>
    


  /**
   * Reference to a field of type 'RewardStatus[]'
   */
  export type ListEnumRewardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatar?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    school?: StringNullableFilter<"User"> | string | null
    grade?: StringNullableFilter<"User"> | string | null
    knowledgePoints?: IntFilter<"User"> | number
    level?: IntFilter<"User"> | number
    experience?: IntFilter<"User"> | number
    businessName?: StringNullableFilter<"User"> | string | null
    businessType?: StringNullableFilter<"User"> | string | null
    contactPhone?: StringNullableFilter<"User"> | string | null
    games?: GameListRelationFilter
    gameAnswers?: GameAnswerListRelationFilter
    userRewards?: UserRewardListRelationFilter
    userPets?: UserPetListRelationFilter
    userStats?: XOR<UserStatsNullableScalarRelationFilter, UserStatsWhereInput> | null
    vendorRewards?: RewardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    knowledgePoints?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    businessName?: SortOrderInput | SortOrder
    businessType?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    games?: GameOrderByRelationAggregateInput
    gameAnswers?: GameAnswerOrderByRelationAggregateInput
    userRewards?: UserRewardOrderByRelationAggregateInput
    userPets?: UserPetOrderByRelationAggregateInput
    userStats?: UserStatsOrderByWithRelationInput
    vendorRewards?: RewardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatar?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    school?: StringNullableFilter<"User"> | string | null
    grade?: StringNullableFilter<"User"> | string | null
    knowledgePoints?: IntFilter<"User"> | number
    level?: IntFilter<"User"> | number
    experience?: IntFilter<"User"> | number
    businessName?: StringNullableFilter<"User"> | string | null
    businessType?: StringNullableFilter<"User"> | string | null
    contactPhone?: StringNullableFilter<"User"> | string | null
    games?: GameListRelationFilter
    gameAnswers?: GameAnswerListRelationFilter
    userRewards?: UserRewardListRelationFilter
    userPets?: UserPetListRelationFilter
    userStats?: XOR<UserStatsNullableScalarRelationFilter, UserStatsWhereInput> | null
    vendorRewards?: RewardListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    knowledgePoints?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    businessName?: SortOrderInput | SortOrder
    businessType?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    school?: StringNullableWithAggregatesFilter<"User"> | string | null
    grade?: StringNullableWithAggregatesFilter<"User"> | string | null
    knowledgePoints?: IntWithAggregatesFilter<"User"> | number
    level?: IntWithAggregatesFilter<"User"> | number
    experience?: IntWithAggregatesFilter<"User"> | number
    businessName?: StringNullableWithAggregatesFilter<"User"> | string | null
    businessType?: StringNullableWithAggregatesFilter<"User"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    optionA?: StringFilter<"Question"> | string
    optionB?: StringFilter<"Question"> | string
    optionC?: StringFilter<"Question"> | string
    optionD?: StringFilter<"Question"> | string
    correctAnswer?: StringFilter<"Question"> | string
    explanation?: StringNullableFilter<"Question"> | string | null
    subject?: EnumSubjectFilter<"Question"> | $Enums.Subject
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    gameAnswers?: GameAnswerListRelationFilter
    bossQuestions?: BossQuestionListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrderInput | SortOrder
    subject?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameAnswers?: GameAnswerOrderByRelationAggregateInput
    bossQuestions?: BossQuestionOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    question?: StringFilter<"Question"> | string
    optionA?: StringFilter<"Question"> | string
    optionB?: StringFilter<"Question"> | string
    optionC?: StringFilter<"Question"> | string
    optionD?: StringFilter<"Question"> | string
    correctAnswer?: StringFilter<"Question"> | string
    explanation?: StringNullableFilter<"Question"> | string | null
    subject?: EnumSubjectFilter<"Question"> | $Enums.Subject
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    gameAnswers?: GameAnswerListRelationFilter
    bossQuestions?: BossQuestionListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrderInput | SortOrder
    subject?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    question?: StringWithAggregatesFilter<"Question"> | string
    optionA?: StringWithAggregatesFilter<"Question"> | string
    optionB?: StringWithAggregatesFilter<"Question"> | string
    optionC?: StringWithAggregatesFilter<"Question"> | string
    optionD?: StringWithAggregatesFilter<"Question"> | string
    correctAnswer?: StringWithAggregatesFilter<"Question"> | string
    explanation?: StringNullableWithAggregatesFilter<"Question"> | string | null
    subject?: EnumSubjectWithAggregatesFilter<"Question"> | $Enums.Subject
    difficulty?: EnumDifficultyWithAggregatesFilter<"Question"> | $Enums.Difficulty
    isActive?: BoolWithAggregatesFilter<"Question"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    userId?: StringFilter<"Game"> | string
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    difficulty?: EnumDifficultyFilter<"Game"> | $Enums.Difficulty
    subject?: EnumSubjectNullableFilter<"Game"> | $Enums.Subject | null
    currentQuestion?: IntFilter<"Game"> | number
    totalQuestions?: IntFilter<"Game"> | number
    score?: IntFilter<"Game"> | number
    knowledgePointsEarned?: IntFilter<"Game"> | number
    timeStarted?: DateTimeFilter<"Game"> | Date | string
    timeCompleted?: DateTimeNullableFilter<"Game"> | Date | string | null
    bossDefeated?: BoolFilter<"Game"> | boolean
    bossHp?: IntNullableFilter<"Game"> | number | null
    bossMaxHp?: IntNullableFilter<"Game"> | number | null
    timerBonus?: IntFilter<"Game"> | number
    shieldActive?: BoolFilter<"Game"> | boolean
    kpMultiplier?: FloatFilter<"Game"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gameAnswers?: GameAnswerListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    difficulty?: SortOrder
    subject?: SortOrderInput | SortOrder
    currentQuestion?: SortOrder
    totalQuestions?: SortOrder
    score?: SortOrder
    knowledgePointsEarned?: SortOrder
    timeStarted?: SortOrder
    timeCompleted?: SortOrderInput | SortOrder
    bossDefeated?: SortOrder
    bossHp?: SortOrderInput | SortOrder
    bossMaxHp?: SortOrderInput | SortOrder
    timerBonus?: SortOrder
    shieldActive?: SortOrder
    kpMultiplier?: SortOrder
    user?: UserOrderByWithRelationInput
    gameAnswers?: GameAnswerOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    userId?: StringFilter<"Game"> | string
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    difficulty?: EnumDifficultyFilter<"Game"> | $Enums.Difficulty
    subject?: EnumSubjectNullableFilter<"Game"> | $Enums.Subject | null
    currentQuestion?: IntFilter<"Game"> | number
    totalQuestions?: IntFilter<"Game"> | number
    score?: IntFilter<"Game"> | number
    knowledgePointsEarned?: IntFilter<"Game"> | number
    timeStarted?: DateTimeFilter<"Game"> | Date | string
    timeCompleted?: DateTimeNullableFilter<"Game"> | Date | string | null
    bossDefeated?: BoolFilter<"Game"> | boolean
    bossHp?: IntNullableFilter<"Game"> | number | null
    bossMaxHp?: IntNullableFilter<"Game"> | number | null
    timerBonus?: IntFilter<"Game"> | number
    shieldActive?: BoolFilter<"Game"> | boolean
    kpMultiplier?: FloatFilter<"Game"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gameAnswers?: GameAnswerListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    difficulty?: SortOrder
    subject?: SortOrderInput | SortOrder
    currentQuestion?: SortOrder
    totalQuestions?: SortOrder
    score?: SortOrder
    knowledgePointsEarned?: SortOrder
    timeStarted?: SortOrder
    timeCompleted?: SortOrderInput | SortOrder
    bossDefeated?: SortOrder
    bossHp?: SortOrderInput | SortOrder
    bossMaxHp?: SortOrderInput | SortOrder
    timerBonus?: SortOrder
    shieldActive?: SortOrder
    kpMultiplier?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    userId?: StringWithAggregatesFilter<"Game"> | string
    status?: EnumGameStatusWithAggregatesFilter<"Game"> | $Enums.GameStatus
    difficulty?: EnumDifficultyWithAggregatesFilter<"Game"> | $Enums.Difficulty
    subject?: EnumSubjectNullableWithAggregatesFilter<"Game"> | $Enums.Subject | null
    currentQuestion?: IntWithAggregatesFilter<"Game"> | number
    totalQuestions?: IntWithAggregatesFilter<"Game"> | number
    score?: IntWithAggregatesFilter<"Game"> | number
    knowledgePointsEarned?: IntWithAggregatesFilter<"Game"> | number
    timeStarted?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    timeCompleted?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
    bossDefeated?: BoolWithAggregatesFilter<"Game"> | boolean
    bossHp?: IntNullableWithAggregatesFilter<"Game"> | number | null
    bossMaxHp?: IntNullableWithAggregatesFilter<"Game"> | number | null
    timerBonus?: IntWithAggregatesFilter<"Game"> | number
    shieldActive?: BoolWithAggregatesFilter<"Game"> | boolean
    kpMultiplier?: FloatWithAggregatesFilter<"Game"> | number
  }

  export type GameAnswerWhereInput = {
    AND?: GameAnswerWhereInput | GameAnswerWhereInput[]
    OR?: GameAnswerWhereInput[]
    NOT?: GameAnswerWhereInput | GameAnswerWhereInput[]
    id?: StringFilter<"GameAnswer"> | string
    gameId?: StringFilter<"GameAnswer"> | string
    questionId?: StringFilter<"GameAnswer"> | string
    userId?: StringFilter<"GameAnswer"> | string
    selectedAnswer?: StringFilter<"GameAnswer"> | string
    isCorrect?: BoolFilter<"GameAnswer"> | boolean
    timeSpent?: IntFilter<"GameAnswer"> | number
    knowledgePointsEarned?: IntFilter<"GameAnswer"> | number
    answeredAt?: DateTimeFilter<"GameAnswer"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GameAnswerOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    timeSpent?: SortOrder
    knowledgePointsEarned?: SortOrder
    answeredAt?: SortOrder
    game?: GameOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GameAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameAnswerWhereInput | GameAnswerWhereInput[]
    OR?: GameAnswerWhereInput[]
    NOT?: GameAnswerWhereInput | GameAnswerWhereInput[]
    gameId?: StringFilter<"GameAnswer"> | string
    questionId?: StringFilter<"GameAnswer"> | string
    userId?: StringFilter<"GameAnswer"> | string
    selectedAnswer?: StringFilter<"GameAnswer"> | string
    isCorrect?: BoolFilter<"GameAnswer"> | boolean
    timeSpent?: IntFilter<"GameAnswer"> | number
    knowledgePointsEarned?: IntFilter<"GameAnswer"> | number
    answeredAt?: DateTimeFilter<"GameAnswer"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GameAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    timeSpent?: SortOrder
    knowledgePointsEarned?: SortOrder
    answeredAt?: SortOrder
    _count?: GameAnswerCountOrderByAggregateInput
    _avg?: GameAnswerAvgOrderByAggregateInput
    _max?: GameAnswerMaxOrderByAggregateInput
    _min?: GameAnswerMinOrderByAggregateInput
    _sum?: GameAnswerSumOrderByAggregateInput
  }

  export type GameAnswerScalarWhereWithAggregatesInput = {
    AND?: GameAnswerScalarWhereWithAggregatesInput | GameAnswerScalarWhereWithAggregatesInput[]
    OR?: GameAnswerScalarWhereWithAggregatesInput[]
    NOT?: GameAnswerScalarWhereWithAggregatesInput | GameAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameAnswer"> | string
    gameId?: StringWithAggregatesFilter<"GameAnswer"> | string
    questionId?: StringWithAggregatesFilter<"GameAnswer"> | string
    userId?: StringWithAggregatesFilter<"GameAnswer"> | string
    selectedAnswer?: StringWithAggregatesFilter<"GameAnswer"> | string
    isCorrect?: BoolWithAggregatesFilter<"GameAnswer"> | boolean
    timeSpent?: IntWithAggregatesFilter<"GameAnswer"> | number
    knowledgePointsEarned?: IntWithAggregatesFilter<"GameAnswer"> | number
    answeredAt?: DateTimeWithAggregatesFilter<"GameAnswer"> | Date | string
  }

  export type RewardWhereInput = {
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    id?: StringFilter<"Reward"> | string
    title?: StringFilter<"Reward"> | string
    description?: StringFilter<"Reward"> | string
    knowledgePointsCost?: IntFilter<"Reward"> | number
    imageUrl?: StringNullableFilter<"Reward"> | string | null
    category?: StringFilter<"Reward"> | string
    isActive?: BoolFilter<"Reward"> | boolean
    stockQuantity?: IntFilter<"Reward"> | number
    vendorId?: StringFilter<"Reward"> | string
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
    vendor?: XOR<UserScalarRelationFilter, UserWhereInput>
    userRewards?: UserRewardListRelationFilter
  }

  export type RewardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    knowledgePointsCost?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    category?: SortOrder
    isActive?: SortOrder
    stockQuantity?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: UserOrderByWithRelationInput
    userRewards?: UserRewardOrderByRelationAggregateInput
  }

  export type RewardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    title?: StringFilter<"Reward"> | string
    description?: StringFilter<"Reward"> | string
    knowledgePointsCost?: IntFilter<"Reward"> | number
    imageUrl?: StringNullableFilter<"Reward"> | string | null
    category?: StringFilter<"Reward"> | string
    isActive?: BoolFilter<"Reward"> | boolean
    stockQuantity?: IntFilter<"Reward"> | number
    vendorId?: StringFilter<"Reward"> | string
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
    vendor?: XOR<UserScalarRelationFilter, UserWhereInput>
    userRewards?: UserRewardListRelationFilter
  }, "id">

  export type RewardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    knowledgePointsCost?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    category?: SortOrder
    isActive?: SortOrder
    stockQuantity?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RewardCountOrderByAggregateInput
    _avg?: RewardAvgOrderByAggregateInput
    _max?: RewardMaxOrderByAggregateInput
    _min?: RewardMinOrderByAggregateInput
    _sum?: RewardSumOrderByAggregateInput
  }

  export type RewardScalarWhereWithAggregatesInput = {
    AND?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    OR?: RewardScalarWhereWithAggregatesInput[]
    NOT?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reward"> | string
    title?: StringWithAggregatesFilter<"Reward"> | string
    description?: StringWithAggregatesFilter<"Reward"> | string
    knowledgePointsCost?: IntWithAggregatesFilter<"Reward"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Reward"> | string | null
    category?: StringWithAggregatesFilter<"Reward"> | string
    isActive?: BoolWithAggregatesFilter<"Reward"> | boolean
    stockQuantity?: IntWithAggregatesFilter<"Reward"> | number
    vendorId?: StringWithAggregatesFilter<"Reward"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
  }

  export type UserRewardWhereInput = {
    AND?: UserRewardWhereInput | UserRewardWhereInput[]
    OR?: UserRewardWhereInput[]
    NOT?: UserRewardWhereInput | UserRewardWhereInput[]
    id?: StringFilter<"UserReward"> | string
    userId?: StringFilter<"UserReward"> | string
    rewardId?: StringFilter<"UserReward"> | string
    status?: EnumRewardStatusFilter<"UserReward"> | $Enums.RewardStatus
    qrCode?: StringNullableFilter<"UserReward"> | string | null
    redeemedAt?: DateTimeNullableFilter<"UserReward"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"UserReward"> | Date | string | null
    createdAt?: DateTimeFilter<"UserReward"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reward?: XOR<RewardScalarRelationFilter, RewardWhereInput>
  }

  export type UserRewardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reward?: RewardOrderByWithRelationInput
  }

  export type UserRewardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserRewardWhereInput | UserRewardWhereInput[]
    OR?: UserRewardWhereInput[]
    NOT?: UserRewardWhereInput | UserRewardWhereInput[]
    userId?: StringFilter<"UserReward"> | string
    rewardId?: StringFilter<"UserReward"> | string
    status?: EnumRewardStatusFilter<"UserReward"> | $Enums.RewardStatus
    qrCode?: StringNullableFilter<"UserReward"> | string | null
    redeemedAt?: DateTimeNullableFilter<"UserReward"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"UserReward"> | Date | string | null
    createdAt?: DateTimeFilter<"UserReward"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reward?: XOR<RewardScalarRelationFilter, RewardWhereInput>
  }, "id">

  export type UserRewardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserRewardCountOrderByAggregateInput
    _max?: UserRewardMaxOrderByAggregateInput
    _min?: UserRewardMinOrderByAggregateInput
  }

  export type UserRewardScalarWhereWithAggregatesInput = {
    AND?: UserRewardScalarWhereWithAggregatesInput | UserRewardScalarWhereWithAggregatesInput[]
    OR?: UserRewardScalarWhereWithAggregatesInput[]
    NOT?: UserRewardScalarWhereWithAggregatesInput | UserRewardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserReward"> | string
    userId?: StringWithAggregatesFilter<"UserReward"> | string
    rewardId?: StringWithAggregatesFilter<"UserReward"> | string
    status?: EnumRewardStatusWithAggregatesFilter<"UserReward"> | $Enums.RewardStatus
    qrCode?: StringNullableWithAggregatesFilter<"UserReward"> | string | null
    redeemedAt?: DateTimeNullableWithAggregatesFilter<"UserReward"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"UserReward"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserReward"> | Date | string
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    description?: StringFilter<"Pet"> | string
    imageUrl?: StringFilter<"Pet"> | string
    rarity?: StringFilter<"Pet"> | string
    knowledgePointsCost?: IntFilter<"Pet"> | number
    abilities?: StringNullableListFilter<"Pet">
    isActive?: BoolFilter<"Pet"> | boolean
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    userPets?: UserPetListRelationFilter
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    rarity?: SortOrder
    knowledgePointsCost?: SortOrder
    abilities?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userPets?: UserPetOrderByRelationAggregateInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    name?: StringFilter<"Pet"> | string
    description?: StringFilter<"Pet"> | string
    imageUrl?: StringFilter<"Pet"> | string
    rarity?: StringFilter<"Pet"> | string
    knowledgePointsCost?: IntFilter<"Pet"> | number
    abilities?: StringNullableListFilter<"Pet">
    isActive?: BoolFilter<"Pet"> | boolean
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    userPets?: UserPetListRelationFilter
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    rarity?: SortOrder
    knowledgePointsCost?: SortOrder
    abilities?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pet"> | string
    name?: StringWithAggregatesFilter<"Pet"> | string
    description?: StringWithAggregatesFilter<"Pet"> | string
    imageUrl?: StringWithAggregatesFilter<"Pet"> | string
    rarity?: StringWithAggregatesFilter<"Pet"> | string
    knowledgePointsCost?: IntWithAggregatesFilter<"Pet"> | number
    abilities?: StringNullableListFilter<"Pet">
    isActive?: BoolWithAggregatesFilter<"Pet"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
  }

  export type UserPetWhereInput = {
    AND?: UserPetWhereInput | UserPetWhereInput[]
    OR?: UserPetWhereInput[]
    NOT?: UserPetWhereInput | UserPetWhereInput[]
    id?: StringFilter<"UserPet"> | string
    userId?: StringFilter<"UserPet"> | string
    petId?: StringFilter<"UserPet"> | string
    nickname?: StringNullableFilter<"UserPet"> | string | null
    level?: IntFilter<"UserPet"> | number
    experience?: IntFilter<"UserPet"> | number
    isActive?: BoolFilter<"UserPet"> | boolean
    acquiredAt?: DateTimeFilter<"UserPet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type UserPetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
    nickname?: SortOrderInput | SortOrder
    level?: SortOrder
    experience?: SortOrder
    isActive?: SortOrder
    acquiredAt?: SortOrder
    user?: UserOrderByWithRelationInput
    pet?: PetOrderByWithRelationInput
  }

  export type UserPetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_petId?: UserPetUserIdPetIdCompoundUniqueInput
    AND?: UserPetWhereInput | UserPetWhereInput[]
    OR?: UserPetWhereInput[]
    NOT?: UserPetWhereInput | UserPetWhereInput[]
    userId?: StringFilter<"UserPet"> | string
    petId?: StringFilter<"UserPet"> | string
    nickname?: StringNullableFilter<"UserPet"> | string | null
    level?: IntFilter<"UserPet"> | number
    experience?: IntFilter<"UserPet"> | number
    isActive?: BoolFilter<"UserPet"> | boolean
    acquiredAt?: DateTimeFilter<"UserPet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id" | "userId_petId">

  export type UserPetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
    nickname?: SortOrderInput | SortOrder
    level?: SortOrder
    experience?: SortOrder
    isActive?: SortOrder
    acquiredAt?: SortOrder
    _count?: UserPetCountOrderByAggregateInput
    _avg?: UserPetAvgOrderByAggregateInput
    _max?: UserPetMaxOrderByAggregateInput
    _min?: UserPetMinOrderByAggregateInput
    _sum?: UserPetSumOrderByAggregateInput
  }

  export type UserPetScalarWhereWithAggregatesInput = {
    AND?: UserPetScalarWhereWithAggregatesInput | UserPetScalarWhereWithAggregatesInput[]
    OR?: UserPetScalarWhereWithAggregatesInput[]
    NOT?: UserPetScalarWhereWithAggregatesInput | UserPetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPet"> | string
    userId?: StringWithAggregatesFilter<"UserPet"> | string
    petId?: StringWithAggregatesFilter<"UserPet"> | string
    nickname?: StringNullableWithAggregatesFilter<"UserPet"> | string | null
    level?: IntWithAggregatesFilter<"UserPet"> | number
    experience?: IntWithAggregatesFilter<"UserPet"> | number
    isActive?: BoolWithAggregatesFilter<"UserPet"> | boolean
    acquiredAt?: DateTimeWithAggregatesFilter<"UserPet"> | Date | string
  }

  export type BossWhereInput = {
    AND?: BossWhereInput | BossWhereInput[]
    OR?: BossWhereInput[]
    NOT?: BossWhereInput | BossWhereInput[]
    id?: StringFilter<"Boss"> | string
    name?: StringFilter<"Boss"> | string
    description?: StringFilter<"Boss"> | string
    imageUrl?: StringFilter<"Boss"> | string
    baseHp?: IntFilter<"Boss"> | number
    hpPerLevel?: IntFilter<"Boss"> | number
    difficulty?: EnumDifficultyFilter<"Boss"> | $Enums.Difficulty
    isActive?: BoolFilter<"Boss"> | boolean
    createdAt?: DateTimeFilter<"Boss"> | Date | string
    bossQuestions?: BossQuestionListRelationFilter
  }

  export type BossOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    baseHp?: SortOrder
    hpPerLevel?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    bossQuestions?: BossQuestionOrderByRelationAggregateInput
  }

  export type BossWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BossWhereInput | BossWhereInput[]
    OR?: BossWhereInput[]
    NOT?: BossWhereInput | BossWhereInput[]
    name?: StringFilter<"Boss"> | string
    description?: StringFilter<"Boss"> | string
    imageUrl?: StringFilter<"Boss"> | string
    baseHp?: IntFilter<"Boss"> | number
    hpPerLevel?: IntFilter<"Boss"> | number
    difficulty?: EnumDifficultyFilter<"Boss"> | $Enums.Difficulty
    isActive?: BoolFilter<"Boss"> | boolean
    createdAt?: DateTimeFilter<"Boss"> | Date | string
    bossQuestions?: BossQuestionListRelationFilter
  }, "id">

  export type BossOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    baseHp?: SortOrder
    hpPerLevel?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: BossCountOrderByAggregateInput
    _avg?: BossAvgOrderByAggregateInput
    _max?: BossMaxOrderByAggregateInput
    _min?: BossMinOrderByAggregateInput
    _sum?: BossSumOrderByAggregateInput
  }

  export type BossScalarWhereWithAggregatesInput = {
    AND?: BossScalarWhereWithAggregatesInput | BossScalarWhereWithAggregatesInput[]
    OR?: BossScalarWhereWithAggregatesInput[]
    NOT?: BossScalarWhereWithAggregatesInput | BossScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Boss"> | string
    name?: StringWithAggregatesFilter<"Boss"> | string
    description?: StringWithAggregatesFilter<"Boss"> | string
    imageUrl?: StringWithAggregatesFilter<"Boss"> | string
    baseHp?: IntWithAggregatesFilter<"Boss"> | number
    hpPerLevel?: IntWithAggregatesFilter<"Boss"> | number
    difficulty?: EnumDifficultyWithAggregatesFilter<"Boss"> | $Enums.Difficulty
    isActive?: BoolWithAggregatesFilter<"Boss"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Boss"> | Date | string
  }

  export type BossQuestionWhereInput = {
    AND?: BossQuestionWhereInput | BossQuestionWhereInput[]
    OR?: BossQuestionWhereInput[]
    NOT?: BossQuestionWhereInput | BossQuestionWhereInput[]
    id?: StringFilter<"BossQuestion"> | string
    bossId?: StringFilter<"BossQuestion"> | string
    questionId?: StringFilter<"BossQuestion"> | string
    boss?: XOR<BossScalarRelationFilter, BossWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type BossQuestionOrderByWithRelationInput = {
    id?: SortOrder
    bossId?: SortOrder
    questionId?: SortOrder
    boss?: BossOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type BossQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bossId_questionId?: BossQuestionBossIdQuestionIdCompoundUniqueInput
    AND?: BossQuestionWhereInput | BossQuestionWhereInput[]
    OR?: BossQuestionWhereInput[]
    NOT?: BossQuestionWhereInput | BossQuestionWhereInput[]
    bossId?: StringFilter<"BossQuestion"> | string
    questionId?: StringFilter<"BossQuestion"> | string
    boss?: XOR<BossScalarRelationFilter, BossWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "bossId_questionId">

  export type BossQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    bossId?: SortOrder
    questionId?: SortOrder
    _count?: BossQuestionCountOrderByAggregateInput
    _max?: BossQuestionMaxOrderByAggregateInput
    _min?: BossQuestionMinOrderByAggregateInput
  }

  export type BossQuestionScalarWhereWithAggregatesInput = {
    AND?: BossQuestionScalarWhereWithAggregatesInput | BossQuestionScalarWhereWithAggregatesInput[]
    OR?: BossQuestionScalarWhereWithAggregatesInput[]
    NOT?: BossQuestionScalarWhereWithAggregatesInput | BossQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BossQuestion"> | string
    bossId?: StringWithAggregatesFilter<"BossQuestion"> | string
    questionId?: StringWithAggregatesFilter<"BossQuestion"> | string
  }

  export type UserStatsWhereInput = {
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    id?: StringFilter<"UserStats"> | string
    userId?: StringFilter<"UserStats"> | string
    totalGamesPlayed?: IntFilter<"UserStats"> | number
    totalBossesDefeated?: IntFilter<"UserStats"> | number
    totalCorrectAnswers?: IntFilter<"UserStats"> | number
    totalQuestions?: IntFilter<"UserStats"> | number
    longestStreak?: IntFilter<"UserStats"> | number
    currentStreak?: IntFilter<"UserStats"> | number
    averageScore?: FloatFilter<"UserStats"> | number
    totalTimeSpent?: IntFilter<"UserStats"> | number
    favoriteSubject?: EnumSubjectNullableFilter<"UserStats"> | $Enums.Subject | null
    lastPlayedAt?: DateTimeNullableFilter<"UserStats"> | Date | string | null
    createdAt?: DateTimeFilter<"UserStats"> | Date | string
    updatedAt?: DateTimeFilter<"UserStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserStatsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGamesPlayed?: SortOrder
    totalBossesDefeated?: SortOrder
    totalCorrectAnswers?: SortOrder
    totalQuestions?: SortOrder
    longestStreak?: SortOrder
    currentStreak?: SortOrder
    averageScore?: SortOrder
    totalTimeSpent?: SortOrder
    favoriteSubject?: SortOrderInput | SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    totalGamesPlayed?: IntFilter<"UserStats"> | number
    totalBossesDefeated?: IntFilter<"UserStats"> | number
    totalCorrectAnswers?: IntFilter<"UserStats"> | number
    totalQuestions?: IntFilter<"UserStats"> | number
    longestStreak?: IntFilter<"UserStats"> | number
    currentStreak?: IntFilter<"UserStats"> | number
    averageScore?: FloatFilter<"UserStats"> | number
    totalTimeSpent?: IntFilter<"UserStats"> | number
    favoriteSubject?: EnumSubjectNullableFilter<"UserStats"> | $Enums.Subject | null
    lastPlayedAt?: DateTimeNullableFilter<"UserStats"> | Date | string | null
    createdAt?: DateTimeFilter<"UserStats"> | Date | string
    updatedAt?: DateTimeFilter<"UserStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserStatsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGamesPlayed?: SortOrder
    totalBossesDefeated?: SortOrder
    totalCorrectAnswers?: SortOrder
    totalQuestions?: SortOrder
    longestStreak?: SortOrder
    currentStreak?: SortOrder
    averageScore?: SortOrder
    totalTimeSpent?: SortOrder
    favoriteSubject?: SortOrderInput | SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserStatsCountOrderByAggregateInput
    _avg?: UserStatsAvgOrderByAggregateInput
    _max?: UserStatsMaxOrderByAggregateInput
    _min?: UserStatsMinOrderByAggregateInput
    _sum?: UserStatsSumOrderByAggregateInput
  }

  export type UserStatsScalarWhereWithAggregatesInput = {
    AND?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    OR?: UserStatsScalarWhereWithAggregatesInput[]
    NOT?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStats"> | string
    userId?: StringWithAggregatesFilter<"UserStats"> | string
    totalGamesPlayed?: IntWithAggregatesFilter<"UserStats"> | number
    totalBossesDefeated?: IntWithAggregatesFilter<"UserStats"> | number
    totalCorrectAnswers?: IntWithAggregatesFilter<"UserStats"> | number
    totalQuestions?: IntWithAggregatesFilter<"UserStats"> | number
    longestStreak?: IntWithAggregatesFilter<"UserStats"> | number
    currentStreak?: IntWithAggregatesFilter<"UserStats"> | number
    averageScore?: FloatWithAggregatesFilter<"UserStats"> | number
    totalTimeSpent?: IntWithAggregatesFilter<"UserStats"> | number
    favoriteSubject?: EnumSubjectNullableWithAggregatesFilter<"UserStats"> | $Enums.Subject | null
    lastPlayedAt?: DateTimeNullableWithAggregatesFilter<"UserStats"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserStats"> | Date | string
  }

  export type LeaderboardWhereInput = {
    AND?: LeaderboardWhereInput | LeaderboardWhereInput[]
    OR?: LeaderboardWhereInput[]
    NOT?: LeaderboardWhereInput | LeaderboardWhereInput[]
    id?: StringFilter<"Leaderboard"> | string
    userId?: StringFilter<"Leaderboard"> | string
    username?: StringFilter<"Leaderboard"> | string
    knowledgePoints?: IntFilter<"Leaderboard"> | number
    level?: IntFilter<"Leaderboard"> | number
    totalGamesPlayed?: IntFilter<"Leaderboard"> | number
    bossesDefeated?: IntFilter<"Leaderboard"> | number
    rank?: IntFilter<"Leaderboard"> | number
    period?: StringFilter<"Leaderboard"> | string
    createdAt?: DateTimeFilter<"Leaderboard"> | Date | string
    updatedAt?: DateTimeFilter<"Leaderboard"> | Date | string
  }

  export type LeaderboardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    knowledgePoints?: SortOrder
    level?: SortOrder
    totalGamesPlayed?: SortOrder
    bossesDefeated?: SortOrder
    rank?: SortOrder
    period?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_period?: LeaderboardUserIdPeriodCompoundUniqueInput
    AND?: LeaderboardWhereInput | LeaderboardWhereInput[]
    OR?: LeaderboardWhereInput[]
    NOT?: LeaderboardWhereInput | LeaderboardWhereInput[]
    userId?: StringFilter<"Leaderboard"> | string
    username?: StringFilter<"Leaderboard"> | string
    knowledgePoints?: IntFilter<"Leaderboard"> | number
    level?: IntFilter<"Leaderboard"> | number
    totalGamesPlayed?: IntFilter<"Leaderboard"> | number
    bossesDefeated?: IntFilter<"Leaderboard"> | number
    rank?: IntFilter<"Leaderboard"> | number
    period?: StringFilter<"Leaderboard"> | string
    createdAt?: DateTimeFilter<"Leaderboard"> | Date | string
    updatedAt?: DateTimeFilter<"Leaderboard"> | Date | string
  }, "id" | "userId_period">

  export type LeaderboardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    knowledgePoints?: SortOrder
    level?: SortOrder
    totalGamesPlayed?: SortOrder
    bossesDefeated?: SortOrder
    rank?: SortOrder
    period?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaderboardCountOrderByAggregateInput
    _avg?: LeaderboardAvgOrderByAggregateInput
    _max?: LeaderboardMaxOrderByAggregateInput
    _min?: LeaderboardMinOrderByAggregateInput
    _sum?: LeaderboardSumOrderByAggregateInput
  }

  export type LeaderboardScalarWhereWithAggregatesInput = {
    AND?: LeaderboardScalarWhereWithAggregatesInput | LeaderboardScalarWhereWithAggregatesInput[]
    OR?: LeaderboardScalarWhereWithAggregatesInput[]
    NOT?: LeaderboardScalarWhereWithAggregatesInput | LeaderboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Leaderboard"> | string
    userId?: StringWithAggregatesFilter<"Leaderboard"> | string
    username?: StringWithAggregatesFilter<"Leaderboard"> | string
    knowledgePoints?: IntWithAggregatesFilter<"Leaderboard"> | number
    level?: IntWithAggregatesFilter<"Leaderboard"> | number
    totalGamesPlayed?: IntWithAggregatesFilter<"Leaderboard"> | number
    bossesDefeated?: IntWithAggregatesFilter<"Leaderboard"> | number
    rank?: IntWithAggregatesFilter<"Leaderboard"> | number
    period?: StringWithAggregatesFilter<"Leaderboard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Leaderboard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Leaderboard"> | Date | string
  }

  export type SystemSettingsWhereInput = {
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    id?: StringFilter<"SystemSettings"> | string
    key?: StringFilter<"SystemSettings"> | string
    value?: StringFilter<"SystemSettings"> | string
    description?: StringNullableFilter<"SystemSettings"> | string | null
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }

  export type SystemSettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    value?: StringFilter<"SystemSettings"> | string
    description?: StringNullableFilter<"SystemSettings"> | string | null
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }, "id" | "key">

  export type SystemSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingsCountOrderByAggregateInput
    _max?: SystemSettingsMaxOrderByAggregateInput
    _min?: SystemSettingsMinOrderByAggregateInput
  }

  export type SystemSettingsScalarWhereWithAggregatesInput = {
    AND?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    OR?: SystemSettingsScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSettings"> | string
    key?: StringWithAggregatesFilter<"SystemSettings"> | string
    value?: StringWithAggregatesFilter<"SystemSettings"> | string
    description?: StringNullableWithAggregatesFilter<"SystemSettings"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameCreateNestedManyWithoutUserInput
    gameAnswers?: GameAnswerCreateNestedManyWithoutUserInput
    userRewards?: UserRewardCreateNestedManyWithoutUserInput
    userPets?: UserPetCreateNestedManyWithoutUserInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
    vendorRewards?: RewardCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameUncheckedCreateNestedManyWithoutUserInput
    gameAnswers?: GameAnswerUncheckedCreateNestedManyWithoutUserInput
    userRewards?: UserRewardUncheckedCreateNestedManyWithoutUserInput
    userPets?: UserPetUncheckedCreateNestedManyWithoutUserInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
    vendorRewards?: RewardUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUpdateManyWithoutUserNestedInput
    gameAnswers?: GameAnswerUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUpdateManyWithoutUserNestedInput
    userPets?: UserPetUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
    vendorRewards?: RewardUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUncheckedUpdateManyWithoutUserNestedInput
    gameAnswers?: GameAnswerUncheckedUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUncheckedUpdateManyWithoutUserNestedInput
    userPets?: UserPetUncheckedUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
    vendorRewards?: RewardUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCreateInput = {
    id?: string
    question: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctAnswer: string
    explanation?: string | null
    subject: $Enums.Subject
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gameAnswers?: GameAnswerCreateNestedManyWithoutQuestionInput
    bossQuestions?: BossQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    question: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctAnswer: string
    explanation?: string | null
    subject: $Enums.Subject
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gameAnswers?: GameAnswerUncheckedCreateNestedManyWithoutQuestionInput
    bossQuestions?: BossQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameAnswers?: GameAnswerUpdateManyWithoutQuestionNestedInput
    bossQuestions?: BossQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameAnswers?: GameAnswerUncheckedUpdateManyWithoutQuestionNestedInput
    bossQuestions?: BossQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    question: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctAnswer: string
    explanation?: string | null
    subject: $Enums.Subject
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    status?: $Enums.GameStatus
    difficulty: $Enums.Difficulty
    subject?: $Enums.Subject | null
    currentQuestion?: number
    totalQuestions?: number
    score?: number
    knowledgePointsEarned?: number
    timeStarted?: Date | string
    timeCompleted?: Date | string | null
    bossDefeated?: boolean
    bossHp?: number | null
    bossMaxHp?: number | null
    timerBonus?: number
    shieldActive?: boolean
    kpMultiplier?: number
    user: UserCreateNestedOneWithoutGamesInput
    gameAnswers?: GameAnswerCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    userId: string
    status?: $Enums.GameStatus
    difficulty: $Enums.Difficulty
    subject?: $Enums.Subject | null
    currentQuestion?: number
    totalQuestions?: number
    score?: number
    knowledgePointsEarned?: number
    timeStarted?: Date | string
    timeCompleted?: Date | string | null
    bossDefeated?: boolean
    bossHp?: number | null
    bossMaxHp?: number | null
    timerBonus?: number
    shieldActive?: boolean
    kpMultiplier?: number
    gameAnswers?: GameAnswerUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    currentQuestion?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    timeStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    timeCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bossDefeated?: BoolFieldUpdateOperationsInput | boolean
    bossHp?: NullableIntFieldUpdateOperationsInput | number | null
    bossMaxHp?: NullableIntFieldUpdateOperationsInput | number | null
    timerBonus?: IntFieldUpdateOperationsInput | number
    shieldActive?: BoolFieldUpdateOperationsInput | boolean
    kpMultiplier?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
    gameAnswers?: GameAnswerUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    currentQuestion?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    timeStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    timeCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bossDefeated?: BoolFieldUpdateOperationsInput | boolean
    bossHp?: NullableIntFieldUpdateOperationsInput | number | null
    bossMaxHp?: NullableIntFieldUpdateOperationsInput | number | null
    timerBonus?: IntFieldUpdateOperationsInput | number
    shieldActive?: BoolFieldUpdateOperationsInput | boolean
    kpMultiplier?: FloatFieldUpdateOperationsInput | number
    gameAnswers?: GameAnswerUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    userId: string
    status?: $Enums.GameStatus
    difficulty: $Enums.Difficulty
    subject?: $Enums.Subject | null
    currentQuestion?: number
    totalQuestions?: number
    score?: number
    knowledgePointsEarned?: number
    timeStarted?: Date | string
    timeCompleted?: Date | string | null
    bossDefeated?: boolean
    bossHp?: number | null
    bossMaxHp?: number | null
    timerBonus?: number
    shieldActive?: boolean
    kpMultiplier?: number
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    currentQuestion?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    timeStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    timeCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bossDefeated?: BoolFieldUpdateOperationsInput | boolean
    bossHp?: NullableIntFieldUpdateOperationsInput | number | null
    bossMaxHp?: NullableIntFieldUpdateOperationsInput | number | null
    timerBonus?: IntFieldUpdateOperationsInput | number
    shieldActive?: BoolFieldUpdateOperationsInput | boolean
    kpMultiplier?: FloatFieldUpdateOperationsInput | number
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    currentQuestion?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    timeStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    timeCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bossDefeated?: BoolFieldUpdateOperationsInput | boolean
    bossHp?: NullableIntFieldUpdateOperationsInput | number | null
    bossMaxHp?: NullableIntFieldUpdateOperationsInput | number | null
    timerBonus?: IntFieldUpdateOperationsInput | number
    shieldActive?: BoolFieldUpdateOperationsInput | boolean
    kpMultiplier?: FloatFieldUpdateOperationsInput | number
  }

  export type GameAnswerCreateInput = {
    id?: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
    game: GameCreateNestedOneWithoutGameAnswersInput
    question: QuestionCreateNestedOneWithoutGameAnswersInput
    user: UserCreateNestedOneWithoutGameAnswersInput
  }

  export type GameAnswerUncheckedCreateInput = {
    id?: string
    gameId: string
    questionId: string
    userId: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
  }

  export type GameAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutGameAnswersNestedInput
    user?: UserUpdateOneRequiredWithoutGameAnswersNestedInput
  }

  export type GameAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameAnswerCreateManyInput = {
    id?: string
    gameId: string
    questionId: string
    userId: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
  }

  export type GameAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardCreateInput = {
    id?: string
    title: string
    description: string
    knowledgePointsCost: number
    imageUrl?: string | null
    category: string
    isActive?: boolean
    stockQuantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: UserCreateNestedOneWithoutVendorRewardsInput
    userRewards?: UserRewardCreateNestedManyWithoutRewardInput
  }

  export type RewardUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    knowledgePointsCost: number
    imageUrl?: string | null
    category: string
    isActive?: boolean
    stockQuantity?: number
    vendorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userRewards?: UserRewardUncheckedCreateNestedManyWithoutRewardInput
  }

  export type RewardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: UserUpdateOneRequiredWithoutVendorRewardsNestedInput
    userRewards?: UserRewardUpdateManyWithoutRewardNestedInput
  }

  export type RewardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRewards?: UserRewardUncheckedUpdateManyWithoutRewardNestedInput
  }

  export type RewardCreateManyInput = {
    id?: string
    title: string
    description: string
    knowledgePointsCost: number
    imageUrl?: string | null
    category: string
    isActive?: boolean
    stockQuantity?: number
    vendorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRewardCreateInput = {
    id?: string
    status?: $Enums.RewardStatus
    qrCode?: string | null
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserRewardsInput
    reward: RewardCreateNestedOneWithoutUserRewardsInput
  }

  export type UserRewardUncheckedCreateInput = {
    id?: string
    userId: string
    rewardId: string
    status?: $Enums.RewardStatus
    qrCode?: string | null
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserRewardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRewardsNestedInput
    reward?: RewardUpdateOneRequiredWithoutUserRewardsNestedInput
  }

  export type UserRewardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRewardCreateManyInput = {
    id?: string
    userId: string
    rewardId: string
    status?: $Enums.RewardStatus
    qrCode?: string | null
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserRewardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRewardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    rarity: string
    knowledgePointsCost: number
    abilities?: PetCreateabilitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    userPets?: UserPetCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    rarity: string
    knowledgePointsCost: number
    abilities?: PetCreateabilitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    userPets?: UserPetUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    abilities?: PetUpdateabilitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPets?: UserPetUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    abilities?: PetUpdateabilitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPets?: UserPetUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    rarity: string
    knowledgePointsCost: number
    abilities?: PetCreateabilitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    abilities?: PetUpdateabilitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    abilities?: PetUpdateabilitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPetCreateInput = {
    id?: string
    nickname?: string | null
    level?: number
    experience?: number
    isActive?: boolean
    acquiredAt?: Date | string
    user: UserCreateNestedOneWithoutUserPetsInput
    pet: PetCreateNestedOneWithoutUserPetsInput
  }

  export type UserPetUncheckedCreateInput = {
    id?: string
    userId: string
    petId: string
    nickname?: string | null
    level?: number
    experience?: number
    isActive?: boolean
    acquiredAt?: Date | string
  }

  export type UserPetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPetsNestedInput
    pet?: PetUpdateOneRequiredWithoutUserPetsNestedInput
  }

  export type UserPetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPetCreateManyInput = {
    id?: string
    userId: string
    petId: string
    nickname?: string | null
    level?: number
    experience?: number
    isActive?: boolean
    acquiredAt?: Date | string
  }

  export type UserPetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BossCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    baseHp: number
    hpPerLevel?: number
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
    bossQuestions?: BossQuestionCreateNestedManyWithoutBossInput
  }

  export type BossUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    baseHp: number
    hpPerLevel?: number
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
    bossQuestions?: BossQuestionUncheckedCreateNestedManyWithoutBossInput
  }

  export type BossUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    hpPerLevel?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bossQuestions?: BossQuestionUpdateManyWithoutBossNestedInput
  }

  export type BossUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    hpPerLevel?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bossQuestions?: BossQuestionUncheckedUpdateManyWithoutBossNestedInput
  }

  export type BossCreateManyInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    baseHp: number
    hpPerLevel?: number
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BossUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    hpPerLevel?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BossUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    hpPerLevel?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BossQuestionCreateInput = {
    id?: string
    boss: BossCreateNestedOneWithoutBossQuestionsInput
    question: QuestionCreateNestedOneWithoutBossQuestionsInput
  }

  export type BossQuestionUncheckedCreateInput = {
    id?: string
    bossId: string
    questionId: string
  }

  export type BossQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boss?: BossUpdateOneRequiredWithoutBossQuestionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutBossQuestionsNestedInput
  }

  export type BossQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bossId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type BossQuestionCreateManyInput = {
    id?: string
    bossId: string
    questionId: string
  }

  export type BossQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BossQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bossId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserStatsCreateInput = {
    id?: string
    totalGamesPlayed?: number
    totalBossesDefeated?: number
    totalCorrectAnswers?: number
    totalQuestions?: number
    longestStreak?: number
    currentStreak?: number
    averageScore?: number
    totalTimeSpent?: number
    favoriteSubject?: $Enums.Subject | null
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserStatsInput
  }

  export type UserStatsUncheckedCreateInput = {
    id?: string
    userId: string
    totalGamesPlayed?: number
    totalBossesDefeated?: number
    totalCorrectAnswers?: number
    totalQuestions?: number
    longestStreak?: number
    currentStreak?: number
    averageScore?: number
    totalTimeSpent?: number
    favoriteSubject?: $Enums.Subject | null
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    totalBossesDefeated?: IntFieldUpdateOperationsInput | number
    totalCorrectAnswers?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    totalTimeSpent?: IntFieldUpdateOperationsInput | number
    favoriteSubject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserStatsNestedInput
  }

  export type UserStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    totalBossesDefeated?: IntFieldUpdateOperationsInput | number
    totalCorrectAnswers?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    totalTimeSpent?: IntFieldUpdateOperationsInput | number
    favoriteSubject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsCreateManyInput = {
    id?: string
    userId: string
    totalGamesPlayed?: number
    totalBossesDefeated?: number
    totalCorrectAnswers?: number
    totalQuestions?: number
    longestStreak?: number
    currentStreak?: number
    averageScore?: number
    totalTimeSpent?: number
    favoriteSubject?: $Enums.Subject | null
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    totalBossesDefeated?: IntFieldUpdateOperationsInput | number
    totalCorrectAnswers?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    totalTimeSpent?: IntFieldUpdateOperationsInput | number
    favoriteSubject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    totalBossesDefeated?: IntFieldUpdateOperationsInput | number
    totalCorrectAnswers?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    totalTimeSpent?: IntFieldUpdateOperationsInput | number
    favoriteSubject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardCreateInput = {
    id?: string
    userId: string
    username: string
    knowledgePoints: number
    level: number
    totalGamesPlayed: number
    bossesDefeated: number
    rank: number
    period: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaderboardUncheckedCreateInput = {
    id?: string
    userId: string
    username: string
    knowledgePoints: number
    level: number
    totalGamesPlayed: number
    bossesDefeated: number
    rank: number
    period: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaderboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    bossesDefeated?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    bossesDefeated?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardCreateManyInput = {
    id?: string
    userId: string
    username: string
    knowledgePoints: number
    level: number
    totalGamesPlayed: number
    bossesDefeated: number
    rank: number
    period: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaderboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    bossesDefeated?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    bossesDefeated?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingsUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateManyInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type GameAnswerListRelationFilter = {
    every?: GameAnswerWhereInput
    some?: GameAnswerWhereInput
    none?: GameAnswerWhereInput
  }

  export type UserRewardListRelationFilter = {
    every?: UserRewardWhereInput
    some?: UserRewardWhereInput
    none?: UserRewardWhereInput
  }

  export type UserPetListRelationFilter = {
    every?: UserPetWhereInput
    some?: UserPetWhereInput
    none?: UserPetWhereInput
  }

  export type UserStatsNullableScalarRelationFilter = {
    is?: UserStatsWhereInput | null
    isNot?: UserStatsWhereInput | null
  }

  export type RewardListRelationFilter = {
    every?: RewardWhereInput
    some?: RewardWhereInput
    none?: RewardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRewardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SortOrder
    grade?: SortOrder
    knowledgePoints?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    contactPhone?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    knowledgePoints?: SortOrder
    level?: SortOrder
    experience?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SortOrder
    grade?: SortOrder
    knowledgePoints?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    contactPhone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SortOrder
    grade?: SortOrder
    knowledgePoints?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    contactPhone?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    knowledgePoints?: SortOrder
    level?: SortOrder
    experience?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSubjectFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectFilter<$PrismaModel> | $Enums.Subject
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type BossQuestionListRelationFilter = {
    every?: BossQuestionWhereInput
    some?: BossQuestionWhereInput
    none?: BossQuestionWhereInput
  }

  export type BossQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    subject?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    subject?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    optionA?: SortOrder
    optionB?: SortOrder
    optionC?: SortOrder
    optionD?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    subject?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubjectWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectWithAggregatesFilter<$PrismaModel> | $Enums.Subject
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectFilter<$PrismaModel>
    _max?: NestedEnumSubjectFilter<$PrismaModel>
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type EnumSubjectNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubjectNullableFilter<$PrismaModel> | $Enums.Subject | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    difficulty?: SortOrder
    subject?: SortOrder
    currentQuestion?: SortOrder
    totalQuestions?: SortOrder
    score?: SortOrder
    knowledgePointsEarned?: SortOrder
    timeStarted?: SortOrder
    timeCompleted?: SortOrder
    bossDefeated?: SortOrder
    bossHp?: SortOrder
    bossMaxHp?: SortOrder
    timerBonus?: SortOrder
    shieldActive?: SortOrder
    kpMultiplier?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    currentQuestion?: SortOrder
    totalQuestions?: SortOrder
    score?: SortOrder
    knowledgePointsEarned?: SortOrder
    bossHp?: SortOrder
    bossMaxHp?: SortOrder
    timerBonus?: SortOrder
    kpMultiplier?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    difficulty?: SortOrder
    subject?: SortOrder
    currentQuestion?: SortOrder
    totalQuestions?: SortOrder
    score?: SortOrder
    knowledgePointsEarned?: SortOrder
    timeStarted?: SortOrder
    timeCompleted?: SortOrder
    bossDefeated?: SortOrder
    bossHp?: SortOrder
    bossMaxHp?: SortOrder
    timerBonus?: SortOrder
    shieldActive?: SortOrder
    kpMultiplier?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    difficulty?: SortOrder
    subject?: SortOrder
    currentQuestion?: SortOrder
    totalQuestions?: SortOrder
    score?: SortOrder
    knowledgePointsEarned?: SortOrder
    timeStarted?: SortOrder
    timeCompleted?: SortOrder
    bossDefeated?: SortOrder
    bossHp?: SortOrder
    bossMaxHp?: SortOrder
    timerBonus?: SortOrder
    shieldActive?: SortOrder
    kpMultiplier?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    currentQuestion?: SortOrder
    totalQuestions?: SortOrder
    score?: SortOrder
    knowledgePointsEarned?: SortOrder
    bossHp?: SortOrder
    bossMaxHp?: SortOrder
    timerBonus?: SortOrder
    kpMultiplier?: SortOrder
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type EnumSubjectNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubjectNullableWithAggregatesFilter<$PrismaModel> | $Enums.Subject | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubjectNullableFilter<$PrismaModel>
    _max?: NestedEnumSubjectNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type GameAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    timeSpent?: SortOrder
    knowledgePointsEarned?: SortOrder
    answeredAt?: SortOrder
  }

  export type GameAnswerAvgOrderByAggregateInput = {
    timeSpent?: SortOrder
    knowledgePointsEarned?: SortOrder
  }

  export type GameAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    timeSpent?: SortOrder
    knowledgePointsEarned?: SortOrder
    answeredAt?: SortOrder
  }

  export type GameAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    timeSpent?: SortOrder
    knowledgePointsEarned?: SortOrder
    answeredAt?: SortOrder
  }

  export type GameAnswerSumOrderByAggregateInput = {
    timeSpent?: SortOrder
    knowledgePointsEarned?: SortOrder
  }

  export type RewardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    knowledgePointsCost?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    stockQuantity?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardAvgOrderByAggregateInput = {
    knowledgePointsCost?: SortOrder
    stockQuantity?: SortOrder
  }

  export type RewardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    knowledgePointsCost?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    stockQuantity?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    knowledgePointsCost?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    stockQuantity?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardSumOrderByAggregateInput = {
    knowledgePointsCost?: SortOrder
    stockQuantity?: SortOrder
  }

  export type EnumRewardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardStatusFilter<$PrismaModel> | $Enums.RewardStatus
  }

  export type RewardScalarRelationFilter = {
    is?: RewardWhereInput
    isNot?: RewardWhereInput
  }

  export type UserRewardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    redeemedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRewardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    redeemedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRewardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    redeemedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRewardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel> | $Enums.RewardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardStatusFilter<$PrismaModel>
    _max?: NestedEnumRewardStatusFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    rarity?: SortOrder
    knowledgePointsCost?: SortOrder
    abilities?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    knowledgePointsCost?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    rarity?: SortOrder
    knowledgePointsCost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    rarity?: SortOrder
    knowledgePointsCost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    knowledgePointsCost?: SortOrder
  }

  export type PetScalarRelationFilter = {
    is?: PetWhereInput
    isNot?: PetWhereInput
  }

  export type UserPetUserIdPetIdCompoundUniqueInput = {
    userId: string
    petId: string
  }

  export type UserPetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
    nickname?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    isActive?: SortOrder
    acquiredAt?: SortOrder
  }

  export type UserPetAvgOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
  }

  export type UserPetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
    nickname?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    isActive?: SortOrder
    acquiredAt?: SortOrder
  }

  export type UserPetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
    nickname?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    isActive?: SortOrder
    acquiredAt?: SortOrder
  }

  export type UserPetSumOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
  }

  export type BossCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    baseHp?: SortOrder
    hpPerLevel?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BossAvgOrderByAggregateInput = {
    baseHp?: SortOrder
    hpPerLevel?: SortOrder
  }

  export type BossMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    baseHp?: SortOrder
    hpPerLevel?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BossMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    baseHp?: SortOrder
    hpPerLevel?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BossSumOrderByAggregateInput = {
    baseHp?: SortOrder
    hpPerLevel?: SortOrder
  }

  export type BossScalarRelationFilter = {
    is?: BossWhereInput
    isNot?: BossWhereInput
  }

  export type BossQuestionBossIdQuestionIdCompoundUniqueInput = {
    bossId: string
    questionId: string
  }

  export type BossQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    bossId?: SortOrder
    questionId?: SortOrder
  }

  export type BossQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    bossId?: SortOrder
    questionId?: SortOrder
  }

  export type BossQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    bossId?: SortOrder
    questionId?: SortOrder
  }

  export type UserStatsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGamesPlayed?: SortOrder
    totalBossesDefeated?: SortOrder
    totalCorrectAnswers?: SortOrder
    totalQuestions?: SortOrder
    longestStreak?: SortOrder
    currentStreak?: SortOrder
    averageScore?: SortOrder
    totalTimeSpent?: SortOrder
    favoriteSubject?: SortOrder
    lastPlayedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsAvgOrderByAggregateInput = {
    totalGamesPlayed?: SortOrder
    totalBossesDefeated?: SortOrder
    totalCorrectAnswers?: SortOrder
    totalQuestions?: SortOrder
    longestStreak?: SortOrder
    currentStreak?: SortOrder
    averageScore?: SortOrder
    totalTimeSpent?: SortOrder
  }

  export type UserStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGamesPlayed?: SortOrder
    totalBossesDefeated?: SortOrder
    totalCorrectAnswers?: SortOrder
    totalQuestions?: SortOrder
    longestStreak?: SortOrder
    currentStreak?: SortOrder
    averageScore?: SortOrder
    totalTimeSpent?: SortOrder
    favoriteSubject?: SortOrder
    lastPlayedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGamesPlayed?: SortOrder
    totalBossesDefeated?: SortOrder
    totalCorrectAnswers?: SortOrder
    totalQuestions?: SortOrder
    longestStreak?: SortOrder
    currentStreak?: SortOrder
    averageScore?: SortOrder
    totalTimeSpent?: SortOrder
    favoriteSubject?: SortOrder
    lastPlayedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsSumOrderByAggregateInput = {
    totalGamesPlayed?: SortOrder
    totalBossesDefeated?: SortOrder
    totalCorrectAnswers?: SortOrder
    totalQuestions?: SortOrder
    longestStreak?: SortOrder
    currentStreak?: SortOrder
    averageScore?: SortOrder
    totalTimeSpent?: SortOrder
  }

  export type LeaderboardUserIdPeriodCompoundUniqueInput = {
    userId: string
    period: string
  }

  export type LeaderboardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    knowledgePoints?: SortOrder
    level?: SortOrder
    totalGamesPlayed?: SortOrder
    bossesDefeated?: SortOrder
    rank?: SortOrder
    period?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardAvgOrderByAggregateInput = {
    knowledgePoints?: SortOrder
    level?: SortOrder
    totalGamesPlayed?: SortOrder
    bossesDefeated?: SortOrder
    rank?: SortOrder
  }

  export type LeaderboardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    knowledgePoints?: SortOrder
    level?: SortOrder
    totalGamesPlayed?: SortOrder
    bossesDefeated?: SortOrder
    rank?: SortOrder
    period?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    knowledgePoints?: SortOrder
    level?: SortOrder
    totalGamesPlayed?: SortOrder
    bossesDefeated?: SortOrder
    rank?: SortOrder
    period?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardSumOrderByAggregateInput = {
    knowledgePoints?: SortOrder
    level?: SortOrder
    totalGamesPlayed?: SortOrder
    bossesDefeated?: SortOrder
    rank?: SortOrder
  }

  export type SystemSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameCreateNestedManyWithoutUserInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameAnswerCreateNestedManyWithoutUserInput = {
    create?: XOR<GameAnswerCreateWithoutUserInput, GameAnswerUncheckedCreateWithoutUserInput> | GameAnswerCreateWithoutUserInput[] | GameAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutUserInput | GameAnswerCreateOrConnectWithoutUserInput[]
    createMany?: GameAnswerCreateManyUserInputEnvelope
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
  }

  export type UserRewardCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRewardCreateWithoutUserInput, UserRewardUncheckedCreateWithoutUserInput> | UserRewardCreateWithoutUserInput[] | UserRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRewardCreateOrConnectWithoutUserInput | UserRewardCreateOrConnectWithoutUserInput[]
    createMany?: UserRewardCreateManyUserInputEnvelope
    connect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
  }

  export type UserPetCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPetCreateWithoutUserInput, UserPetUncheckedCreateWithoutUserInput> | UserPetCreateWithoutUserInput[] | UserPetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPetCreateOrConnectWithoutUserInput | UserPetCreateOrConnectWithoutUserInput[]
    createMany?: UserPetCreateManyUserInputEnvelope
    connect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
  }

  export type UserStatsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    connect?: UserStatsWhereUniqueInput
  }

  export type RewardCreateNestedManyWithoutVendorInput = {
    create?: XOR<RewardCreateWithoutVendorInput, RewardUncheckedCreateWithoutVendorInput> | RewardCreateWithoutVendorInput[] | RewardUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutVendorInput | RewardCreateOrConnectWithoutVendorInput[]
    createMany?: RewardCreateManyVendorInputEnvelope
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameAnswerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameAnswerCreateWithoutUserInput, GameAnswerUncheckedCreateWithoutUserInput> | GameAnswerCreateWithoutUserInput[] | GameAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutUserInput | GameAnswerCreateOrConnectWithoutUserInput[]
    createMany?: GameAnswerCreateManyUserInputEnvelope
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
  }

  export type UserRewardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRewardCreateWithoutUserInput, UserRewardUncheckedCreateWithoutUserInput> | UserRewardCreateWithoutUserInput[] | UserRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRewardCreateOrConnectWithoutUserInput | UserRewardCreateOrConnectWithoutUserInput[]
    createMany?: UserRewardCreateManyUserInputEnvelope
    connect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
  }

  export type UserPetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPetCreateWithoutUserInput, UserPetUncheckedCreateWithoutUserInput> | UserPetCreateWithoutUserInput[] | UserPetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPetCreateOrConnectWithoutUserInput | UserPetCreateOrConnectWithoutUserInput[]
    createMany?: UserPetCreateManyUserInputEnvelope
    connect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
  }

  export type UserStatsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    connect?: UserStatsWhereUniqueInput
  }

  export type RewardUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<RewardCreateWithoutVendorInput, RewardUncheckedCreateWithoutVendorInput> | RewardCreateWithoutVendorInput[] | RewardUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutVendorInput | RewardCreateOrConnectWithoutVendorInput[]
    createMany?: RewardCreateManyVendorInputEnvelope
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutUserInput | GameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutUserInput | GameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutUserInput | GameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameAnswerUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameAnswerCreateWithoutUserInput, GameAnswerUncheckedCreateWithoutUserInput> | GameAnswerCreateWithoutUserInput[] | GameAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutUserInput | GameAnswerCreateOrConnectWithoutUserInput[]
    upsert?: GameAnswerUpsertWithWhereUniqueWithoutUserInput | GameAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameAnswerCreateManyUserInputEnvelope
    set?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    disconnect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    delete?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    update?: GameAnswerUpdateWithWhereUniqueWithoutUserInput | GameAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameAnswerUpdateManyWithWhereWithoutUserInput | GameAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameAnswerScalarWhereInput | GameAnswerScalarWhereInput[]
  }

  export type UserRewardUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRewardCreateWithoutUserInput, UserRewardUncheckedCreateWithoutUserInput> | UserRewardCreateWithoutUserInput[] | UserRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRewardCreateOrConnectWithoutUserInput | UserRewardCreateOrConnectWithoutUserInput[]
    upsert?: UserRewardUpsertWithWhereUniqueWithoutUserInput | UserRewardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRewardCreateManyUserInputEnvelope
    set?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    disconnect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    delete?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    connect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    update?: UserRewardUpdateWithWhereUniqueWithoutUserInput | UserRewardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRewardUpdateManyWithWhereWithoutUserInput | UserRewardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRewardScalarWhereInput | UserRewardScalarWhereInput[]
  }

  export type UserPetUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPetCreateWithoutUserInput, UserPetUncheckedCreateWithoutUserInput> | UserPetCreateWithoutUserInput[] | UserPetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPetCreateOrConnectWithoutUserInput | UserPetCreateOrConnectWithoutUserInput[]
    upsert?: UserPetUpsertWithWhereUniqueWithoutUserInput | UserPetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPetCreateManyUserInputEnvelope
    set?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    disconnect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    delete?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    connect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    update?: UserPetUpdateWithWhereUniqueWithoutUserInput | UserPetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPetUpdateManyWithWhereWithoutUserInput | UserPetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPetScalarWhereInput | UserPetScalarWhereInput[]
  }

  export type UserStatsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    upsert?: UserStatsUpsertWithoutUserInput
    disconnect?: UserStatsWhereInput | boolean
    delete?: UserStatsWhereInput | boolean
    connect?: UserStatsWhereUniqueInput
    update?: XOR<XOR<UserStatsUpdateToOneWithWhereWithoutUserInput, UserStatsUpdateWithoutUserInput>, UserStatsUncheckedUpdateWithoutUserInput>
  }

  export type RewardUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RewardCreateWithoutVendorInput, RewardUncheckedCreateWithoutVendorInput> | RewardCreateWithoutVendorInput[] | RewardUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutVendorInput | RewardCreateOrConnectWithoutVendorInput[]
    upsert?: RewardUpsertWithWhereUniqueWithoutVendorInput | RewardUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RewardCreateManyVendorInputEnvelope
    set?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    disconnect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    delete?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    update?: RewardUpdateWithWhereUniqueWithoutVendorInput | RewardUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RewardUpdateManyWithWhereWithoutVendorInput | RewardUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RewardScalarWhereInput | RewardScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutUserInput | GameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutUserInput | GameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutUserInput | GameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameAnswerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameAnswerCreateWithoutUserInput, GameAnswerUncheckedCreateWithoutUserInput> | GameAnswerCreateWithoutUserInput[] | GameAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutUserInput | GameAnswerCreateOrConnectWithoutUserInput[]
    upsert?: GameAnswerUpsertWithWhereUniqueWithoutUserInput | GameAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameAnswerCreateManyUserInputEnvelope
    set?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    disconnect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    delete?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    update?: GameAnswerUpdateWithWhereUniqueWithoutUserInput | GameAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameAnswerUpdateManyWithWhereWithoutUserInput | GameAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameAnswerScalarWhereInput | GameAnswerScalarWhereInput[]
  }

  export type UserRewardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRewardCreateWithoutUserInput, UserRewardUncheckedCreateWithoutUserInput> | UserRewardCreateWithoutUserInput[] | UserRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRewardCreateOrConnectWithoutUserInput | UserRewardCreateOrConnectWithoutUserInput[]
    upsert?: UserRewardUpsertWithWhereUniqueWithoutUserInput | UserRewardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRewardCreateManyUserInputEnvelope
    set?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    disconnect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    delete?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    connect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    update?: UserRewardUpdateWithWhereUniqueWithoutUserInput | UserRewardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRewardUpdateManyWithWhereWithoutUserInput | UserRewardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRewardScalarWhereInput | UserRewardScalarWhereInput[]
  }

  export type UserPetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPetCreateWithoutUserInput, UserPetUncheckedCreateWithoutUserInput> | UserPetCreateWithoutUserInput[] | UserPetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPetCreateOrConnectWithoutUserInput | UserPetCreateOrConnectWithoutUserInput[]
    upsert?: UserPetUpsertWithWhereUniqueWithoutUserInput | UserPetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPetCreateManyUserInputEnvelope
    set?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    disconnect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    delete?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    connect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    update?: UserPetUpdateWithWhereUniqueWithoutUserInput | UserPetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPetUpdateManyWithWhereWithoutUserInput | UserPetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPetScalarWhereInput | UserPetScalarWhereInput[]
  }

  export type UserStatsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatsCreateOrConnectWithoutUserInput
    upsert?: UserStatsUpsertWithoutUserInput
    disconnect?: UserStatsWhereInput | boolean
    delete?: UserStatsWhereInput | boolean
    connect?: UserStatsWhereUniqueInput
    update?: XOR<XOR<UserStatsUpdateToOneWithWhereWithoutUserInput, UserStatsUpdateWithoutUserInput>, UserStatsUncheckedUpdateWithoutUserInput>
  }

  export type RewardUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RewardCreateWithoutVendorInput, RewardUncheckedCreateWithoutVendorInput> | RewardCreateWithoutVendorInput[] | RewardUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RewardCreateOrConnectWithoutVendorInput | RewardCreateOrConnectWithoutVendorInput[]
    upsert?: RewardUpsertWithWhereUniqueWithoutVendorInput | RewardUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RewardCreateManyVendorInputEnvelope
    set?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    disconnect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    delete?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    connect?: RewardWhereUniqueInput | RewardWhereUniqueInput[]
    update?: RewardUpdateWithWhereUniqueWithoutVendorInput | RewardUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RewardUpdateManyWithWhereWithoutVendorInput | RewardUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RewardScalarWhereInput | RewardScalarWhereInput[]
  }

  export type GameAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<GameAnswerCreateWithoutQuestionInput, GameAnswerUncheckedCreateWithoutQuestionInput> | GameAnswerCreateWithoutQuestionInput[] | GameAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutQuestionInput | GameAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: GameAnswerCreateManyQuestionInputEnvelope
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
  }

  export type BossQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<BossQuestionCreateWithoutQuestionInput, BossQuestionUncheckedCreateWithoutQuestionInput> | BossQuestionCreateWithoutQuestionInput[] | BossQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: BossQuestionCreateOrConnectWithoutQuestionInput | BossQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: BossQuestionCreateManyQuestionInputEnvelope
    connect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
  }

  export type GameAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<GameAnswerCreateWithoutQuestionInput, GameAnswerUncheckedCreateWithoutQuestionInput> | GameAnswerCreateWithoutQuestionInput[] | GameAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutQuestionInput | GameAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: GameAnswerCreateManyQuestionInputEnvelope
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
  }

  export type BossQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<BossQuestionCreateWithoutQuestionInput, BossQuestionUncheckedCreateWithoutQuestionInput> | BossQuestionCreateWithoutQuestionInput[] | BossQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: BossQuestionCreateOrConnectWithoutQuestionInput | BossQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: BossQuestionCreateManyQuestionInputEnvelope
    connect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
  }

  export type EnumSubjectFieldUpdateOperationsInput = {
    set?: $Enums.Subject
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type GameAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<GameAnswerCreateWithoutQuestionInput, GameAnswerUncheckedCreateWithoutQuestionInput> | GameAnswerCreateWithoutQuestionInput[] | GameAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutQuestionInput | GameAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: GameAnswerUpsertWithWhereUniqueWithoutQuestionInput | GameAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: GameAnswerCreateManyQuestionInputEnvelope
    set?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    disconnect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    delete?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    update?: GameAnswerUpdateWithWhereUniqueWithoutQuestionInput | GameAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: GameAnswerUpdateManyWithWhereWithoutQuestionInput | GameAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: GameAnswerScalarWhereInput | GameAnswerScalarWhereInput[]
  }

  export type BossQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<BossQuestionCreateWithoutQuestionInput, BossQuestionUncheckedCreateWithoutQuestionInput> | BossQuestionCreateWithoutQuestionInput[] | BossQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: BossQuestionCreateOrConnectWithoutQuestionInput | BossQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: BossQuestionUpsertWithWhereUniqueWithoutQuestionInput | BossQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: BossQuestionCreateManyQuestionInputEnvelope
    set?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    disconnect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    delete?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    connect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    update?: BossQuestionUpdateWithWhereUniqueWithoutQuestionInput | BossQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: BossQuestionUpdateManyWithWhereWithoutQuestionInput | BossQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: BossQuestionScalarWhereInput | BossQuestionScalarWhereInput[]
  }

  export type GameAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<GameAnswerCreateWithoutQuestionInput, GameAnswerUncheckedCreateWithoutQuestionInput> | GameAnswerCreateWithoutQuestionInput[] | GameAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutQuestionInput | GameAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: GameAnswerUpsertWithWhereUniqueWithoutQuestionInput | GameAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: GameAnswerCreateManyQuestionInputEnvelope
    set?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    disconnect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    delete?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    update?: GameAnswerUpdateWithWhereUniqueWithoutQuestionInput | GameAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: GameAnswerUpdateManyWithWhereWithoutQuestionInput | GameAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: GameAnswerScalarWhereInput | GameAnswerScalarWhereInput[]
  }

  export type BossQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<BossQuestionCreateWithoutQuestionInput, BossQuestionUncheckedCreateWithoutQuestionInput> | BossQuestionCreateWithoutQuestionInput[] | BossQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: BossQuestionCreateOrConnectWithoutQuestionInput | BossQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: BossQuestionUpsertWithWhereUniqueWithoutQuestionInput | BossQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: BossQuestionCreateManyQuestionInputEnvelope
    set?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    disconnect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    delete?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    connect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    update?: BossQuestionUpdateWithWhereUniqueWithoutQuestionInput | BossQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: BossQuestionUpdateManyWithWhereWithoutQuestionInput | BossQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: BossQuestionScalarWhereInput | BossQuestionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGamesInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    connect?: UserWhereUniqueInput
  }

  export type GameAnswerCreateNestedManyWithoutGameInput = {
    create?: XOR<GameAnswerCreateWithoutGameInput, GameAnswerUncheckedCreateWithoutGameInput> | GameAnswerCreateWithoutGameInput[] | GameAnswerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutGameInput | GameAnswerCreateOrConnectWithoutGameInput[]
    createMany?: GameAnswerCreateManyGameInputEnvelope
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
  }

  export type GameAnswerUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameAnswerCreateWithoutGameInput, GameAnswerUncheckedCreateWithoutGameInput> | GameAnswerCreateWithoutGameInput[] | GameAnswerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutGameInput | GameAnswerCreateOrConnectWithoutGameInput[]
    createMany?: GameAnswerCreateManyGameInputEnvelope
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type NullableEnumSubjectFieldUpdateOperationsInput = {
    set?: $Enums.Subject | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    upsert?: UserUpsertWithoutGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesInput, UserUpdateWithoutGamesInput>, UserUncheckedUpdateWithoutGamesInput>
  }

  export type GameAnswerUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameAnswerCreateWithoutGameInput, GameAnswerUncheckedCreateWithoutGameInput> | GameAnswerCreateWithoutGameInput[] | GameAnswerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutGameInput | GameAnswerCreateOrConnectWithoutGameInput[]
    upsert?: GameAnswerUpsertWithWhereUniqueWithoutGameInput | GameAnswerUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameAnswerCreateManyGameInputEnvelope
    set?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    disconnect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    delete?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    update?: GameAnswerUpdateWithWhereUniqueWithoutGameInput | GameAnswerUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameAnswerUpdateManyWithWhereWithoutGameInput | GameAnswerUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameAnswerScalarWhereInput | GameAnswerScalarWhereInput[]
  }

  export type GameAnswerUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameAnswerCreateWithoutGameInput, GameAnswerUncheckedCreateWithoutGameInput> | GameAnswerCreateWithoutGameInput[] | GameAnswerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameAnswerCreateOrConnectWithoutGameInput | GameAnswerCreateOrConnectWithoutGameInput[]
    upsert?: GameAnswerUpsertWithWhereUniqueWithoutGameInput | GameAnswerUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameAnswerCreateManyGameInputEnvelope
    set?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    disconnect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    delete?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    connect?: GameAnswerWhereUniqueInput | GameAnswerWhereUniqueInput[]
    update?: GameAnswerUpdateWithWhereUniqueWithoutGameInput | GameAnswerUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameAnswerUpdateManyWithWhereWithoutGameInput | GameAnswerUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameAnswerScalarWhereInput | GameAnswerScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutGameAnswersInput = {
    create?: XOR<GameCreateWithoutGameAnswersInput, GameUncheckedCreateWithoutGameAnswersInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameAnswersInput
    connect?: GameWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutGameAnswersInput = {
    create?: XOR<QuestionCreateWithoutGameAnswersInput, QuestionUncheckedCreateWithoutGameAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutGameAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGameAnswersInput = {
    create?: XOR<UserCreateWithoutGameAnswersInput, UserUncheckedCreateWithoutGameAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutGameAnswersNestedInput = {
    create?: XOR<GameCreateWithoutGameAnswersInput, GameUncheckedCreateWithoutGameAnswersInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameAnswersInput
    upsert?: GameUpsertWithoutGameAnswersInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameAnswersInput, GameUpdateWithoutGameAnswersInput>, GameUncheckedUpdateWithoutGameAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutGameAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutGameAnswersInput, QuestionUncheckedCreateWithoutGameAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutGameAnswersInput
    upsert?: QuestionUpsertWithoutGameAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutGameAnswersInput, QuestionUpdateWithoutGameAnswersInput>, QuestionUncheckedUpdateWithoutGameAnswersInput>
  }

  export type UserUpdateOneRequiredWithoutGameAnswersNestedInput = {
    create?: XOR<UserCreateWithoutGameAnswersInput, UserUncheckedCreateWithoutGameAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameAnswersInput
    upsert?: UserUpsertWithoutGameAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameAnswersInput, UserUpdateWithoutGameAnswersInput>, UserUncheckedUpdateWithoutGameAnswersInput>
  }

  export type UserCreateNestedOneWithoutVendorRewardsInput = {
    create?: XOR<UserCreateWithoutVendorRewardsInput, UserUncheckedCreateWithoutVendorRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorRewardsInput
    connect?: UserWhereUniqueInput
  }

  export type UserRewardCreateNestedManyWithoutRewardInput = {
    create?: XOR<UserRewardCreateWithoutRewardInput, UserRewardUncheckedCreateWithoutRewardInput> | UserRewardCreateWithoutRewardInput[] | UserRewardUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: UserRewardCreateOrConnectWithoutRewardInput | UserRewardCreateOrConnectWithoutRewardInput[]
    createMany?: UserRewardCreateManyRewardInputEnvelope
    connect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
  }

  export type UserRewardUncheckedCreateNestedManyWithoutRewardInput = {
    create?: XOR<UserRewardCreateWithoutRewardInput, UserRewardUncheckedCreateWithoutRewardInput> | UserRewardCreateWithoutRewardInput[] | UserRewardUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: UserRewardCreateOrConnectWithoutRewardInput | UserRewardCreateOrConnectWithoutRewardInput[]
    createMany?: UserRewardCreateManyRewardInputEnvelope
    connect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVendorRewardsNestedInput = {
    create?: XOR<UserCreateWithoutVendorRewardsInput, UserUncheckedCreateWithoutVendorRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorRewardsInput
    upsert?: UserUpsertWithoutVendorRewardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVendorRewardsInput, UserUpdateWithoutVendorRewardsInput>, UserUncheckedUpdateWithoutVendorRewardsInput>
  }

  export type UserRewardUpdateManyWithoutRewardNestedInput = {
    create?: XOR<UserRewardCreateWithoutRewardInput, UserRewardUncheckedCreateWithoutRewardInput> | UserRewardCreateWithoutRewardInput[] | UserRewardUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: UserRewardCreateOrConnectWithoutRewardInput | UserRewardCreateOrConnectWithoutRewardInput[]
    upsert?: UserRewardUpsertWithWhereUniqueWithoutRewardInput | UserRewardUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: UserRewardCreateManyRewardInputEnvelope
    set?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    disconnect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    delete?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    connect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    update?: UserRewardUpdateWithWhereUniqueWithoutRewardInput | UserRewardUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: UserRewardUpdateManyWithWhereWithoutRewardInput | UserRewardUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: UserRewardScalarWhereInput | UserRewardScalarWhereInput[]
  }

  export type UserRewardUncheckedUpdateManyWithoutRewardNestedInput = {
    create?: XOR<UserRewardCreateWithoutRewardInput, UserRewardUncheckedCreateWithoutRewardInput> | UserRewardCreateWithoutRewardInput[] | UserRewardUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: UserRewardCreateOrConnectWithoutRewardInput | UserRewardCreateOrConnectWithoutRewardInput[]
    upsert?: UserRewardUpsertWithWhereUniqueWithoutRewardInput | UserRewardUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: UserRewardCreateManyRewardInputEnvelope
    set?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    disconnect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    delete?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    connect?: UserRewardWhereUniqueInput | UserRewardWhereUniqueInput[]
    update?: UserRewardUpdateWithWhereUniqueWithoutRewardInput | UserRewardUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: UserRewardUpdateManyWithWhereWithoutRewardInput | UserRewardUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: UserRewardScalarWhereInput | UserRewardScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRewardsInput = {
    create?: XOR<UserCreateWithoutUserRewardsInput, UserUncheckedCreateWithoutUserRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRewardsInput
    connect?: UserWhereUniqueInput
  }

  export type RewardCreateNestedOneWithoutUserRewardsInput = {
    create?: XOR<RewardCreateWithoutUserRewardsInput, RewardUncheckedCreateWithoutUserRewardsInput>
    connectOrCreate?: RewardCreateOrConnectWithoutUserRewardsInput
    connect?: RewardWhereUniqueInput
  }

  export type EnumRewardStatusFieldUpdateOperationsInput = {
    set?: $Enums.RewardStatus
  }

  export type UserUpdateOneRequiredWithoutUserRewardsNestedInput = {
    create?: XOR<UserCreateWithoutUserRewardsInput, UserUncheckedCreateWithoutUserRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRewardsInput
    upsert?: UserUpsertWithoutUserRewardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRewardsInput, UserUpdateWithoutUserRewardsInput>, UserUncheckedUpdateWithoutUserRewardsInput>
  }

  export type RewardUpdateOneRequiredWithoutUserRewardsNestedInput = {
    create?: XOR<RewardCreateWithoutUserRewardsInput, RewardUncheckedCreateWithoutUserRewardsInput>
    connectOrCreate?: RewardCreateOrConnectWithoutUserRewardsInput
    upsert?: RewardUpsertWithoutUserRewardsInput
    connect?: RewardWhereUniqueInput
    update?: XOR<XOR<RewardUpdateToOneWithWhereWithoutUserRewardsInput, RewardUpdateWithoutUserRewardsInput>, RewardUncheckedUpdateWithoutUserRewardsInput>
  }

  export type PetCreateabilitiesInput = {
    set: string[]
  }

  export type UserPetCreateNestedManyWithoutPetInput = {
    create?: XOR<UserPetCreateWithoutPetInput, UserPetUncheckedCreateWithoutPetInput> | UserPetCreateWithoutPetInput[] | UserPetUncheckedCreateWithoutPetInput[]
    connectOrCreate?: UserPetCreateOrConnectWithoutPetInput | UserPetCreateOrConnectWithoutPetInput[]
    createMany?: UserPetCreateManyPetInputEnvelope
    connect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
  }

  export type UserPetUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<UserPetCreateWithoutPetInput, UserPetUncheckedCreateWithoutPetInput> | UserPetCreateWithoutPetInput[] | UserPetUncheckedCreateWithoutPetInput[]
    connectOrCreate?: UserPetCreateOrConnectWithoutPetInput | UserPetCreateOrConnectWithoutPetInput[]
    createMany?: UserPetCreateManyPetInputEnvelope
    connect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
  }

  export type PetUpdateabilitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserPetUpdateManyWithoutPetNestedInput = {
    create?: XOR<UserPetCreateWithoutPetInput, UserPetUncheckedCreateWithoutPetInput> | UserPetCreateWithoutPetInput[] | UserPetUncheckedCreateWithoutPetInput[]
    connectOrCreate?: UserPetCreateOrConnectWithoutPetInput | UserPetCreateOrConnectWithoutPetInput[]
    upsert?: UserPetUpsertWithWhereUniqueWithoutPetInput | UserPetUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: UserPetCreateManyPetInputEnvelope
    set?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    disconnect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    delete?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    connect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    update?: UserPetUpdateWithWhereUniqueWithoutPetInput | UserPetUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: UserPetUpdateManyWithWhereWithoutPetInput | UserPetUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: UserPetScalarWhereInput | UserPetScalarWhereInput[]
  }

  export type UserPetUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<UserPetCreateWithoutPetInput, UserPetUncheckedCreateWithoutPetInput> | UserPetCreateWithoutPetInput[] | UserPetUncheckedCreateWithoutPetInput[]
    connectOrCreate?: UserPetCreateOrConnectWithoutPetInput | UserPetCreateOrConnectWithoutPetInput[]
    upsert?: UserPetUpsertWithWhereUniqueWithoutPetInput | UserPetUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: UserPetCreateManyPetInputEnvelope
    set?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    disconnect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    delete?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    connect?: UserPetWhereUniqueInput | UserPetWhereUniqueInput[]
    update?: UserPetUpdateWithWhereUniqueWithoutPetInput | UserPetUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: UserPetUpdateManyWithWhereWithoutPetInput | UserPetUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: UserPetScalarWhereInput | UserPetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserPetsInput = {
    create?: XOR<UserCreateWithoutUserPetsInput, UserUncheckedCreateWithoutUserPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPetsInput
    connect?: UserWhereUniqueInput
  }

  export type PetCreateNestedOneWithoutUserPetsInput = {
    create?: XOR<PetCreateWithoutUserPetsInput, PetUncheckedCreateWithoutUserPetsInput>
    connectOrCreate?: PetCreateOrConnectWithoutUserPetsInput
    connect?: PetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserPetsNestedInput = {
    create?: XOR<UserCreateWithoutUserPetsInput, UserUncheckedCreateWithoutUserPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPetsInput
    upsert?: UserUpsertWithoutUserPetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPetsInput, UserUpdateWithoutUserPetsInput>, UserUncheckedUpdateWithoutUserPetsInput>
  }

  export type PetUpdateOneRequiredWithoutUserPetsNestedInput = {
    create?: XOR<PetCreateWithoutUserPetsInput, PetUncheckedCreateWithoutUserPetsInput>
    connectOrCreate?: PetCreateOrConnectWithoutUserPetsInput
    upsert?: PetUpsertWithoutUserPetsInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutUserPetsInput, PetUpdateWithoutUserPetsInput>, PetUncheckedUpdateWithoutUserPetsInput>
  }

  export type BossQuestionCreateNestedManyWithoutBossInput = {
    create?: XOR<BossQuestionCreateWithoutBossInput, BossQuestionUncheckedCreateWithoutBossInput> | BossQuestionCreateWithoutBossInput[] | BossQuestionUncheckedCreateWithoutBossInput[]
    connectOrCreate?: BossQuestionCreateOrConnectWithoutBossInput | BossQuestionCreateOrConnectWithoutBossInput[]
    createMany?: BossQuestionCreateManyBossInputEnvelope
    connect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
  }

  export type BossQuestionUncheckedCreateNestedManyWithoutBossInput = {
    create?: XOR<BossQuestionCreateWithoutBossInput, BossQuestionUncheckedCreateWithoutBossInput> | BossQuestionCreateWithoutBossInput[] | BossQuestionUncheckedCreateWithoutBossInput[]
    connectOrCreate?: BossQuestionCreateOrConnectWithoutBossInput | BossQuestionCreateOrConnectWithoutBossInput[]
    createMany?: BossQuestionCreateManyBossInputEnvelope
    connect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
  }

  export type BossQuestionUpdateManyWithoutBossNestedInput = {
    create?: XOR<BossQuestionCreateWithoutBossInput, BossQuestionUncheckedCreateWithoutBossInput> | BossQuestionCreateWithoutBossInput[] | BossQuestionUncheckedCreateWithoutBossInput[]
    connectOrCreate?: BossQuestionCreateOrConnectWithoutBossInput | BossQuestionCreateOrConnectWithoutBossInput[]
    upsert?: BossQuestionUpsertWithWhereUniqueWithoutBossInput | BossQuestionUpsertWithWhereUniqueWithoutBossInput[]
    createMany?: BossQuestionCreateManyBossInputEnvelope
    set?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    disconnect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    delete?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    connect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    update?: BossQuestionUpdateWithWhereUniqueWithoutBossInput | BossQuestionUpdateWithWhereUniqueWithoutBossInput[]
    updateMany?: BossQuestionUpdateManyWithWhereWithoutBossInput | BossQuestionUpdateManyWithWhereWithoutBossInput[]
    deleteMany?: BossQuestionScalarWhereInput | BossQuestionScalarWhereInput[]
  }

  export type BossQuestionUncheckedUpdateManyWithoutBossNestedInput = {
    create?: XOR<BossQuestionCreateWithoutBossInput, BossQuestionUncheckedCreateWithoutBossInput> | BossQuestionCreateWithoutBossInput[] | BossQuestionUncheckedCreateWithoutBossInput[]
    connectOrCreate?: BossQuestionCreateOrConnectWithoutBossInput | BossQuestionCreateOrConnectWithoutBossInput[]
    upsert?: BossQuestionUpsertWithWhereUniqueWithoutBossInput | BossQuestionUpsertWithWhereUniqueWithoutBossInput[]
    createMany?: BossQuestionCreateManyBossInputEnvelope
    set?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    disconnect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    delete?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    connect?: BossQuestionWhereUniqueInput | BossQuestionWhereUniqueInput[]
    update?: BossQuestionUpdateWithWhereUniqueWithoutBossInput | BossQuestionUpdateWithWhereUniqueWithoutBossInput[]
    updateMany?: BossQuestionUpdateManyWithWhereWithoutBossInput | BossQuestionUpdateManyWithWhereWithoutBossInput[]
    deleteMany?: BossQuestionScalarWhereInput | BossQuestionScalarWhereInput[]
  }

  export type BossCreateNestedOneWithoutBossQuestionsInput = {
    create?: XOR<BossCreateWithoutBossQuestionsInput, BossUncheckedCreateWithoutBossQuestionsInput>
    connectOrCreate?: BossCreateOrConnectWithoutBossQuestionsInput
    connect?: BossWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutBossQuestionsInput = {
    create?: XOR<QuestionCreateWithoutBossQuestionsInput, QuestionUncheckedCreateWithoutBossQuestionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutBossQuestionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type BossUpdateOneRequiredWithoutBossQuestionsNestedInput = {
    create?: XOR<BossCreateWithoutBossQuestionsInput, BossUncheckedCreateWithoutBossQuestionsInput>
    connectOrCreate?: BossCreateOrConnectWithoutBossQuestionsInput
    upsert?: BossUpsertWithoutBossQuestionsInput
    connect?: BossWhereUniqueInput
    update?: XOR<XOR<BossUpdateToOneWithWhereWithoutBossQuestionsInput, BossUpdateWithoutBossQuestionsInput>, BossUncheckedUpdateWithoutBossQuestionsInput>
  }

  export type QuestionUpdateOneRequiredWithoutBossQuestionsNestedInput = {
    create?: XOR<QuestionCreateWithoutBossQuestionsInput, QuestionUncheckedCreateWithoutBossQuestionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutBossQuestionsInput
    upsert?: QuestionUpsertWithoutBossQuestionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutBossQuestionsInput, QuestionUpdateWithoutBossQuestionsInput>, QuestionUncheckedUpdateWithoutBossQuestionsInput>
  }

  export type UserCreateNestedOneWithoutUserStatsInput = {
    create?: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserStatsNestedInput = {
    create?: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStatsInput
    upsert?: UserUpsertWithoutUserStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserStatsInput, UserUpdateWithoutUserStatsInput>, UserUncheckedUpdateWithoutUserStatsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSubjectFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectFilter<$PrismaModel> | $Enums.Subject
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumSubjectWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectWithAggregatesFilter<$PrismaModel> | $Enums.Subject
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectFilter<$PrismaModel>
    _max?: NestedEnumSubjectFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedEnumSubjectNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubjectNullableFilter<$PrismaModel> | $Enums.Subject | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedEnumSubjectNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubjectNullableWithAggregatesFilter<$PrismaModel> | $Enums.Subject | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubjectNullableFilter<$PrismaModel>
    _max?: NestedEnumSubjectNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRewardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardStatusFilter<$PrismaModel> | $Enums.RewardStatus
  }

  export type NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel> | $Enums.RewardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardStatusFilter<$PrismaModel>
    _max?: NestedEnumRewardStatusFilter<$PrismaModel>
  }

  export type GameCreateWithoutUserInput = {
    id?: string
    status?: $Enums.GameStatus
    difficulty: $Enums.Difficulty
    subject?: $Enums.Subject | null
    currentQuestion?: number
    totalQuestions?: number
    score?: number
    knowledgePointsEarned?: number
    timeStarted?: Date | string
    timeCompleted?: Date | string | null
    bossDefeated?: boolean
    bossHp?: number | null
    bossMaxHp?: number | null
    timerBonus?: number
    shieldActive?: boolean
    kpMultiplier?: number
    gameAnswers?: GameAnswerCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.GameStatus
    difficulty: $Enums.Difficulty
    subject?: $Enums.Subject | null
    currentQuestion?: number
    totalQuestions?: number
    score?: number
    knowledgePointsEarned?: number
    timeStarted?: Date | string
    timeCompleted?: Date | string | null
    bossDefeated?: boolean
    bossHp?: number | null
    bossMaxHp?: number | null
    timerBonus?: number
    shieldActive?: boolean
    kpMultiplier?: number
    gameAnswers?: GameAnswerUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUserInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput>
  }

  export type GameCreateManyUserInputEnvelope = {
    data: GameCreateManyUserInput | GameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameAnswerCreateWithoutUserInput = {
    id?: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
    game: GameCreateNestedOneWithoutGameAnswersInput
    question: QuestionCreateNestedOneWithoutGameAnswersInput
  }

  export type GameAnswerUncheckedCreateWithoutUserInput = {
    id?: string
    gameId: string
    questionId: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
  }

  export type GameAnswerCreateOrConnectWithoutUserInput = {
    where: GameAnswerWhereUniqueInput
    create: XOR<GameAnswerCreateWithoutUserInput, GameAnswerUncheckedCreateWithoutUserInput>
  }

  export type GameAnswerCreateManyUserInputEnvelope = {
    data: GameAnswerCreateManyUserInput | GameAnswerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRewardCreateWithoutUserInput = {
    id?: string
    status?: $Enums.RewardStatus
    qrCode?: string | null
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    reward: RewardCreateNestedOneWithoutUserRewardsInput
  }

  export type UserRewardUncheckedCreateWithoutUserInput = {
    id?: string
    rewardId: string
    status?: $Enums.RewardStatus
    qrCode?: string | null
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserRewardCreateOrConnectWithoutUserInput = {
    where: UserRewardWhereUniqueInput
    create: XOR<UserRewardCreateWithoutUserInput, UserRewardUncheckedCreateWithoutUserInput>
  }

  export type UserRewardCreateManyUserInputEnvelope = {
    data: UserRewardCreateManyUserInput | UserRewardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPetCreateWithoutUserInput = {
    id?: string
    nickname?: string | null
    level?: number
    experience?: number
    isActive?: boolean
    acquiredAt?: Date | string
    pet: PetCreateNestedOneWithoutUserPetsInput
  }

  export type UserPetUncheckedCreateWithoutUserInput = {
    id?: string
    petId: string
    nickname?: string | null
    level?: number
    experience?: number
    isActive?: boolean
    acquiredAt?: Date | string
  }

  export type UserPetCreateOrConnectWithoutUserInput = {
    where: UserPetWhereUniqueInput
    create: XOR<UserPetCreateWithoutUserInput, UserPetUncheckedCreateWithoutUserInput>
  }

  export type UserPetCreateManyUserInputEnvelope = {
    data: UserPetCreateManyUserInput | UserPetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserStatsCreateWithoutUserInput = {
    id?: string
    totalGamesPlayed?: number
    totalBossesDefeated?: number
    totalCorrectAnswers?: number
    totalQuestions?: number
    longestStreak?: number
    currentStreak?: number
    averageScore?: number
    totalTimeSpent?: number
    favoriteSubject?: $Enums.Subject | null
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsUncheckedCreateWithoutUserInput = {
    id?: string
    totalGamesPlayed?: number
    totalBossesDefeated?: number
    totalCorrectAnswers?: number
    totalQuestions?: number
    longestStreak?: number
    currentStreak?: number
    averageScore?: number
    totalTimeSpent?: number
    favoriteSubject?: $Enums.Subject | null
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsCreateOrConnectWithoutUserInput = {
    where: UserStatsWhereUniqueInput
    create: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
  }

  export type RewardCreateWithoutVendorInput = {
    id?: string
    title: string
    description: string
    knowledgePointsCost: number
    imageUrl?: string | null
    category: string
    isActive?: boolean
    stockQuantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userRewards?: UserRewardCreateNestedManyWithoutRewardInput
  }

  export type RewardUncheckedCreateWithoutVendorInput = {
    id?: string
    title: string
    description: string
    knowledgePointsCost: number
    imageUrl?: string | null
    category: string
    isActive?: boolean
    stockQuantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userRewards?: UserRewardUncheckedCreateNestedManyWithoutRewardInput
  }

  export type RewardCreateOrConnectWithoutVendorInput = {
    where: RewardWhereUniqueInput
    create: XOR<RewardCreateWithoutVendorInput, RewardUncheckedCreateWithoutVendorInput>
  }

  export type RewardCreateManyVendorInputEnvelope = {
    data: RewardCreateManyVendorInput | RewardCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutUserInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutUserInput, GameUncheckedUpdateWithoutUserInput>
    create: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput>
  }

  export type GameUpdateWithWhereUniqueWithoutUserInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutUserInput, GameUncheckedUpdateWithoutUserInput>
  }

  export type GameUpdateManyWithWhereWithoutUserInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutUserInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: StringFilter<"Game"> | string
    userId?: StringFilter<"Game"> | string
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    difficulty?: EnumDifficultyFilter<"Game"> | $Enums.Difficulty
    subject?: EnumSubjectNullableFilter<"Game"> | $Enums.Subject | null
    currentQuestion?: IntFilter<"Game"> | number
    totalQuestions?: IntFilter<"Game"> | number
    score?: IntFilter<"Game"> | number
    knowledgePointsEarned?: IntFilter<"Game"> | number
    timeStarted?: DateTimeFilter<"Game"> | Date | string
    timeCompleted?: DateTimeNullableFilter<"Game"> | Date | string | null
    bossDefeated?: BoolFilter<"Game"> | boolean
    bossHp?: IntNullableFilter<"Game"> | number | null
    bossMaxHp?: IntNullableFilter<"Game"> | number | null
    timerBonus?: IntFilter<"Game"> | number
    shieldActive?: BoolFilter<"Game"> | boolean
    kpMultiplier?: FloatFilter<"Game"> | number
  }

  export type GameAnswerUpsertWithWhereUniqueWithoutUserInput = {
    where: GameAnswerWhereUniqueInput
    update: XOR<GameAnswerUpdateWithoutUserInput, GameAnswerUncheckedUpdateWithoutUserInput>
    create: XOR<GameAnswerCreateWithoutUserInput, GameAnswerUncheckedCreateWithoutUserInput>
  }

  export type GameAnswerUpdateWithWhereUniqueWithoutUserInput = {
    where: GameAnswerWhereUniqueInput
    data: XOR<GameAnswerUpdateWithoutUserInput, GameAnswerUncheckedUpdateWithoutUserInput>
  }

  export type GameAnswerUpdateManyWithWhereWithoutUserInput = {
    where: GameAnswerScalarWhereInput
    data: XOR<GameAnswerUpdateManyMutationInput, GameAnswerUncheckedUpdateManyWithoutUserInput>
  }

  export type GameAnswerScalarWhereInput = {
    AND?: GameAnswerScalarWhereInput | GameAnswerScalarWhereInput[]
    OR?: GameAnswerScalarWhereInput[]
    NOT?: GameAnswerScalarWhereInput | GameAnswerScalarWhereInput[]
    id?: StringFilter<"GameAnswer"> | string
    gameId?: StringFilter<"GameAnswer"> | string
    questionId?: StringFilter<"GameAnswer"> | string
    userId?: StringFilter<"GameAnswer"> | string
    selectedAnswer?: StringFilter<"GameAnswer"> | string
    isCorrect?: BoolFilter<"GameAnswer"> | boolean
    timeSpent?: IntFilter<"GameAnswer"> | number
    knowledgePointsEarned?: IntFilter<"GameAnswer"> | number
    answeredAt?: DateTimeFilter<"GameAnswer"> | Date | string
  }

  export type UserRewardUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRewardWhereUniqueInput
    update: XOR<UserRewardUpdateWithoutUserInput, UserRewardUncheckedUpdateWithoutUserInput>
    create: XOR<UserRewardCreateWithoutUserInput, UserRewardUncheckedCreateWithoutUserInput>
  }

  export type UserRewardUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRewardWhereUniqueInput
    data: XOR<UserRewardUpdateWithoutUserInput, UserRewardUncheckedUpdateWithoutUserInput>
  }

  export type UserRewardUpdateManyWithWhereWithoutUserInput = {
    where: UserRewardScalarWhereInput
    data: XOR<UserRewardUpdateManyMutationInput, UserRewardUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRewardScalarWhereInput = {
    AND?: UserRewardScalarWhereInput | UserRewardScalarWhereInput[]
    OR?: UserRewardScalarWhereInput[]
    NOT?: UserRewardScalarWhereInput | UserRewardScalarWhereInput[]
    id?: StringFilter<"UserReward"> | string
    userId?: StringFilter<"UserReward"> | string
    rewardId?: StringFilter<"UserReward"> | string
    status?: EnumRewardStatusFilter<"UserReward"> | $Enums.RewardStatus
    qrCode?: StringNullableFilter<"UserReward"> | string | null
    redeemedAt?: DateTimeNullableFilter<"UserReward"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"UserReward"> | Date | string | null
    createdAt?: DateTimeFilter<"UserReward"> | Date | string
  }

  export type UserPetUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPetWhereUniqueInput
    update: XOR<UserPetUpdateWithoutUserInput, UserPetUncheckedUpdateWithoutUserInput>
    create: XOR<UserPetCreateWithoutUserInput, UserPetUncheckedCreateWithoutUserInput>
  }

  export type UserPetUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPetWhereUniqueInput
    data: XOR<UserPetUpdateWithoutUserInput, UserPetUncheckedUpdateWithoutUserInput>
  }

  export type UserPetUpdateManyWithWhereWithoutUserInput = {
    where: UserPetScalarWhereInput
    data: XOR<UserPetUpdateManyMutationInput, UserPetUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPetScalarWhereInput = {
    AND?: UserPetScalarWhereInput | UserPetScalarWhereInput[]
    OR?: UserPetScalarWhereInput[]
    NOT?: UserPetScalarWhereInput | UserPetScalarWhereInput[]
    id?: StringFilter<"UserPet"> | string
    userId?: StringFilter<"UserPet"> | string
    petId?: StringFilter<"UserPet"> | string
    nickname?: StringNullableFilter<"UserPet"> | string | null
    level?: IntFilter<"UserPet"> | number
    experience?: IntFilter<"UserPet"> | number
    isActive?: BoolFilter<"UserPet"> | boolean
    acquiredAt?: DateTimeFilter<"UserPet"> | Date | string
  }

  export type UserStatsUpsertWithoutUserInput = {
    update: XOR<UserStatsUpdateWithoutUserInput, UserStatsUncheckedUpdateWithoutUserInput>
    create: XOR<UserStatsCreateWithoutUserInput, UserStatsUncheckedCreateWithoutUserInput>
    where?: UserStatsWhereInput
  }

  export type UserStatsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserStatsWhereInput
    data: XOR<UserStatsUpdateWithoutUserInput, UserStatsUncheckedUpdateWithoutUserInput>
  }

  export type UserStatsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    totalBossesDefeated?: IntFieldUpdateOperationsInput | number
    totalCorrectAnswers?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    totalTimeSpent?: IntFieldUpdateOperationsInput | number
    favoriteSubject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalGamesPlayed?: IntFieldUpdateOperationsInput | number
    totalBossesDefeated?: IntFieldUpdateOperationsInput | number
    totalCorrectAnswers?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    totalTimeSpent?: IntFieldUpdateOperationsInput | number
    favoriteSubject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUpsertWithWhereUniqueWithoutVendorInput = {
    where: RewardWhereUniqueInput
    update: XOR<RewardUpdateWithoutVendorInput, RewardUncheckedUpdateWithoutVendorInput>
    create: XOR<RewardCreateWithoutVendorInput, RewardUncheckedCreateWithoutVendorInput>
  }

  export type RewardUpdateWithWhereUniqueWithoutVendorInput = {
    where: RewardWhereUniqueInput
    data: XOR<RewardUpdateWithoutVendorInput, RewardUncheckedUpdateWithoutVendorInput>
  }

  export type RewardUpdateManyWithWhereWithoutVendorInput = {
    where: RewardScalarWhereInput
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyWithoutVendorInput>
  }

  export type RewardScalarWhereInput = {
    AND?: RewardScalarWhereInput | RewardScalarWhereInput[]
    OR?: RewardScalarWhereInput[]
    NOT?: RewardScalarWhereInput | RewardScalarWhereInput[]
    id?: StringFilter<"Reward"> | string
    title?: StringFilter<"Reward"> | string
    description?: StringFilter<"Reward"> | string
    knowledgePointsCost?: IntFilter<"Reward"> | number
    imageUrl?: StringNullableFilter<"Reward"> | string | null
    category?: StringFilter<"Reward"> | string
    isActive?: BoolFilter<"Reward"> | boolean
    stockQuantity?: IntFilter<"Reward"> | number
    vendorId?: StringFilter<"Reward"> | string
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
  }

  export type GameAnswerCreateWithoutQuestionInput = {
    id?: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
    game: GameCreateNestedOneWithoutGameAnswersInput
    user: UserCreateNestedOneWithoutGameAnswersInput
  }

  export type GameAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    gameId: string
    userId: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
  }

  export type GameAnswerCreateOrConnectWithoutQuestionInput = {
    where: GameAnswerWhereUniqueInput
    create: XOR<GameAnswerCreateWithoutQuestionInput, GameAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type GameAnswerCreateManyQuestionInputEnvelope = {
    data: GameAnswerCreateManyQuestionInput | GameAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type BossQuestionCreateWithoutQuestionInput = {
    id?: string
    boss: BossCreateNestedOneWithoutBossQuestionsInput
  }

  export type BossQuestionUncheckedCreateWithoutQuestionInput = {
    id?: string
    bossId: string
  }

  export type BossQuestionCreateOrConnectWithoutQuestionInput = {
    where: BossQuestionWhereUniqueInput
    create: XOR<BossQuestionCreateWithoutQuestionInput, BossQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type BossQuestionCreateManyQuestionInputEnvelope = {
    data: BossQuestionCreateManyQuestionInput | BossQuestionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type GameAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: GameAnswerWhereUniqueInput
    update: XOR<GameAnswerUpdateWithoutQuestionInput, GameAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<GameAnswerCreateWithoutQuestionInput, GameAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type GameAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: GameAnswerWhereUniqueInput
    data: XOR<GameAnswerUpdateWithoutQuestionInput, GameAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type GameAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: GameAnswerScalarWhereInput
    data: XOR<GameAnswerUpdateManyMutationInput, GameAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type BossQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: BossQuestionWhereUniqueInput
    update: XOR<BossQuestionUpdateWithoutQuestionInput, BossQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<BossQuestionCreateWithoutQuestionInput, BossQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type BossQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: BossQuestionWhereUniqueInput
    data: XOR<BossQuestionUpdateWithoutQuestionInput, BossQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type BossQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: BossQuestionScalarWhereInput
    data: XOR<BossQuestionUpdateManyMutationInput, BossQuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type BossQuestionScalarWhereInput = {
    AND?: BossQuestionScalarWhereInput | BossQuestionScalarWhereInput[]
    OR?: BossQuestionScalarWhereInput[]
    NOT?: BossQuestionScalarWhereInput | BossQuestionScalarWhereInput[]
    id?: StringFilter<"BossQuestion"> | string
    bossId?: StringFilter<"BossQuestion"> | string
    questionId?: StringFilter<"BossQuestion"> | string
  }

  export type UserCreateWithoutGamesInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    gameAnswers?: GameAnswerCreateNestedManyWithoutUserInput
    userRewards?: UserRewardCreateNestedManyWithoutUserInput
    userPets?: UserPetCreateNestedManyWithoutUserInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
    vendorRewards?: RewardCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateWithoutGamesInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    gameAnswers?: GameAnswerUncheckedCreateNestedManyWithoutUserInput
    userRewards?: UserRewardUncheckedCreateNestedManyWithoutUserInput
    userPets?: UserPetUncheckedCreateNestedManyWithoutUserInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
    vendorRewards?: RewardUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserCreateOrConnectWithoutGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
  }

  export type GameAnswerCreateWithoutGameInput = {
    id?: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
    question: QuestionCreateNestedOneWithoutGameAnswersInput
    user: UserCreateNestedOneWithoutGameAnswersInput
  }

  export type GameAnswerUncheckedCreateWithoutGameInput = {
    id?: string
    questionId: string
    userId: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
  }

  export type GameAnswerCreateOrConnectWithoutGameInput = {
    where: GameAnswerWhereUniqueInput
    create: XOR<GameAnswerCreateWithoutGameInput, GameAnswerUncheckedCreateWithoutGameInput>
  }

  export type GameAnswerCreateManyGameInputEnvelope = {
    data: GameAnswerCreateManyGameInput | GameAnswerCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGamesInput = {
    update: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
  }

  export type UserUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    gameAnswers?: GameAnswerUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUpdateManyWithoutUserNestedInput
    userPets?: UserPetUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
    vendorRewards?: RewardUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    gameAnswers?: GameAnswerUncheckedUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUncheckedUpdateManyWithoutUserNestedInput
    userPets?: UserPetUncheckedUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
    vendorRewards?: RewardUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type GameAnswerUpsertWithWhereUniqueWithoutGameInput = {
    where: GameAnswerWhereUniqueInput
    update: XOR<GameAnswerUpdateWithoutGameInput, GameAnswerUncheckedUpdateWithoutGameInput>
    create: XOR<GameAnswerCreateWithoutGameInput, GameAnswerUncheckedCreateWithoutGameInput>
  }

  export type GameAnswerUpdateWithWhereUniqueWithoutGameInput = {
    where: GameAnswerWhereUniqueInput
    data: XOR<GameAnswerUpdateWithoutGameInput, GameAnswerUncheckedUpdateWithoutGameInput>
  }

  export type GameAnswerUpdateManyWithWhereWithoutGameInput = {
    where: GameAnswerScalarWhereInput
    data: XOR<GameAnswerUpdateManyMutationInput, GameAnswerUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutGameAnswersInput = {
    id?: string
    status?: $Enums.GameStatus
    difficulty: $Enums.Difficulty
    subject?: $Enums.Subject | null
    currentQuestion?: number
    totalQuestions?: number
    score?: number
    knowledgePointsEarned?: number
    timeStarted?: Date | string
    timeCompleted?: Date | string | null
    bossDefeated?: boolean
    bossHp?: number | null
    bossMaxHp?: number | null
    timerBonus?: number
    shieldActive?: boolean
    kpMultiplier?: number
    user: UserCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutGameAnswersInput = {
    id?: string
    userId: string
    status?: $Enums.GameStatus
    difficulty: $Enums.Difficulty
    subject?: $Enums.Subject | null
    currentQuestion?: number
    totalQuestions?: number
    score?: number
    knowledgePointsEarned?: number
    timeStarted?: Date | string
    timeCompleted?: Date | string | null
    bossDefeated?: boolean
    bossHp?: number | null
    bossMaxHp?: number | null
    timerBonus?: number
    shieldActive?: boolean
    kpMultiplier?: number
  }

  export type GameCreateOrConnectWithoutGameAnswersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameAnswersInput, GameUncheckedCreateWithoutGameAnswersInput>
  }

  export type QuestionCreateWithoutGameAnswersInput = {
    id?: string
    question: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctAnswer: string
    explanation?: string | null
    subject: $Enums.Subject
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bossQuestions?: BossQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutGameAnswersInput = {
    id?: string
    question: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctAnswer: string
    explanation?: string | null
    subject: $Enums.Subject
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bossQuestions?: BossQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutGameAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutGameAnswersInput, QuestionUncheckedCreateWithoutGameAnswersInput>
  }

  export type UserCreateWithoutGameAnswersInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameCreateNestedManyWithoutUserInput
    userRewards?: UserRewardCreateNestedManyWithoutUserInput
    userPets?: UserPetCreateNestedManyWithoutUserInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
    vendorRewards?: RewardCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateWithoutGameAnswersInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameUncheckedCreateNestedManyWithoutUserInput
    userRewards?: UserRewardUncheckedCreateNestedManyWithoutUserInput
    userPets?: UserPetUncheckedCreateNestedManyWithoutUserInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
    vendorRewards?: RewardUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserCreateOrConnectWithoutGameAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameAnswersInput, UserUncheckedCreateWithoutGameAnswersInput>
  }

  export type GameUpsertWithoutGameAnswersInput = {
    update: XOR<GameUpdateWithoutGameAnswersInput, GameUncheckedUpdateWithoutGameAnswersInput>
    create: XOR<GameCreateWithoutGameAnswersInput, GameUncheckedCreateWithoutGameAnswersInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameAnswersInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameAnswersInput, GameUncheckedUpdateWithoutGameAnswersInput>
  }

  export type GameUpdateWithoutGameAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    currentQuestion?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    timeStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    timeCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bossDefeated?: BoolFieldUpdateOperationsInput | boolean
    bossHp?: NullableIntFieldUpdateOperationsInput | number | null
    bossMaxHp?: NullableIntFieldUpdateOperationsInput | number | null
    timerBonus?: IntFieldUpdateOperationsInput | number
    shieldActive?: BoolFieldUpdateOperationsInput | boolean
    kpMultiplier?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutGameAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    currentQuestion?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    timeStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    timeCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bossDefeated?: BoolFieldUpdateOperationsInput | boolean
    bossHp?: NullableIntFieldUpdateOperationsInput | number | null
    bossMaxHp?: NullableIntFieldUpdateOperationsInput | number | null
    timerBonus?: IntFieldUpdateOperationsInput | number
    shieldActive?: BoolFieldUpdateOperationsInput | boolean
    kpMultiplier?: FloatFieldUpdateOperationsInput | number
  }

  export type QuestionUpsertWithoutGameAnswersInput = {
    update: XOR<QuestionUpdateWithoutGameAnswersInput, QuestionUncheckedUpdateWithoutGameAnswersInput>
    create: XOR<QuestionCreateWithoutGameAnswersInput, QuestionUncheckedCreateWithoutGameAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutGameAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutGameAnswersInput, QuestionUncheckedUpdateWithoutGameAnswersInput>
  }

  export type QuestionUpdateWithoutGameAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bossQuestions?: BossQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutGameAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bossQuestions?: BossQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserUpsertWithoutGameAnswersInput = {
    update: XOR<UserUpdateWithoutGameAnswersInput, UserUncheckedUpdateWithoutGameAnswersInput>
    create: XOR<UserCreateWithoutGameAnswersInput, UserUncheckedCreateWithoutGameAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameAnswersInput, UserUncheckedUpdateWithoutGameAnswersInput>
  }

  export type UserUpdateWithoutGameAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUpdateManyWithoutUserNestedInput
    userPets?: UserPetUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
    vendorRewards?: RewardUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateWithoutGameAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUncheckedUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUncheckedUpdateManyWithoutUserNestedInput
    userPets?: UserPetUncheckedUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
    vendorRewards?: RewardUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutVendorRewardsInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameCreateNestedManyWithoutUserInput
    gameAnswers?: GameAnswerCreateNestedManyWithoutUserInput
    userRewards?: UserRewardCreateNestedManyWithoutUserInput
    userPets?: UserPetCreateNestedManyWithoutUserInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVendorRewardsInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameUncheckedCreateNestedManyWithoutUserInput
    gameAnswers?: GameAnswerUncheckedCreateNestedManyWithoutUserInput
    userRewards?: UserRewardUncheckedCreateNestedManyWithoutUserInput
    userPets?: UserPetUncheckedCreateNestedManyWithoutUserInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVendorRewardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorRewardsInput, UserUncheckedCreateWithoutVendorRewardsInput>
  }

  export type UserRewardCreateWithoutRewardInput = {
    id?: string
    status?: $Enums.RewardStatus
    qrCode?: string | null
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserRewardsInput
  }

  export type UserRewardUncheckedCreateWithoutRewardInput = {
    id?: string
    userId: string
    status?: $Enums.RewardStatus
    qrCode?: string | null
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserRewardCreateOrConnectWithoutRewardInput = {
    where: UserRewardWhereUniqueInput
    create: XOR<UserRewardCreateWithoutRewardInput, UserRewardUncheckedCreateWithoutRewardInput>
  }

  export type UserRewardCreateManyRewardInputEnvelope = {
    data: UserRewardCreateManyRewardInput | UserRewardCreateManyRewardInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVendorRewardsInput = {
    update: XOR<UserUpdateWithoutVendorRewardsInput, UserUncheckedUpdateWithoutVendorRewardsInput>
    create: XOR<UserCreateWithoutVendorRewardsInput, UserUncheckedCreateWithoutVendorRewardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVendorRewardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVendorRewardsInput, UserUncheckedUpdateWithoutVendorRewardsInput>
  }

  export type UserUpdateWithoutVendorRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUpdateManyWithoutUserNestedInput
    gameAnswers?: GameAnswerUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUpdateManyWithoutUserNestedInput
    userPets?: UserPetUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVendorRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUncheckedUpdateManyWithoutUserNestedInput
    gameAnswers?: GameAnswerUncheckedUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUncheckedUpdateManyWithoutUserNestedInput
    userPets?: UserPetUncheckedUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserRewardUpsertWithWhereUniqueWithoutRewardInput = {
    where: UserRewardWhereUniqueInput
    update: XOR<UserRewardUpdateWithoutRewardInput, UserRewardUncheckedUpdateWithoutRewardInput>
    create: XOR<UserRewardCreateWithoutRewardInput, UserRewardUncheckedCreateWithoutRewardInput>
  }

  export type UserRewardUpdateWithWhereUniqueWithoutRewardInput = {
    where: UserRewardWhereUniqueInput
    data: XOR<UserRewardUpdateWithoutRewardInput, UserRewardUncheckedUpdateWithoutRewardInput>
  }

  export type UserRewardUpdateManyWithWhereWithoutRewardInput = {
    where: UserRewardScalarWhereInput
    data: XOR<UserRewardUpdateManyMutationInput, UserRewardUncheckedUpdateManyWithoutRewardInput>
  }

  export type UserCreateWithoutUserRewardsInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameCreateNestedManyWithoutUserInput
    gameAnswers?: GameAnswerCreateNestedManyWithoutUserInput
    userPets?: UserPetCreateNestedManyWithoutUserInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
    vendorRewards?: RewardCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateWithoutUserRewardsInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameUncheckedCreateNestedManyWithoutUserInput
    gameAnswers?: GameAnswerUncheckedCreateNestedManyWithoutUserInput
    userPets?: UserPetUncheckedCreateNestedManyWithoutUserInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
    vendorRewards?: RewardUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserCreateOrConnectWithoutUserRewardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRewardsInput, UserUncheckedCreateWithoutUserRewardsInput>
  }

  export type RewardCreateWithoutUserRewardsInput = {
    id?: string
    title: string
    description: string
    knowledgePointsCost: number
    imageUrl?: string | null
    category: string
    isActive?: boolean
    stockQuantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: UserCreateNestedOneWithoutVendorRewardsInput
  }

  export type RewardUncheckedCreateWithoutUserRewardsInput = {
    id?: string
    title: string
    description: string
    knowledgePointsCost: number
    imageUrl?: string | null
    category: string
    isActive?: boolean
    stockQuantity?: number
    vendorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardCreateOrConnectWithoutUserRewardsInput = {
    where: RewardWhereUniqueInput
    create: XOR<RewardCreateWithoutUserRewardsInput, RewardUncheckedCreateWithoutUserRewardsInput>
  }

  export type UserUpsertWithoutUserRewardsInput = {
    update: XOR<UserUpdateWithoutUserRewardsInput, UserUncheckedUpdateWithoutUserRewardsInput>
    create: XOR<UserCreateWithoutUserRewardsInput, UserUncheckedCreateWithoutUserRewardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRewardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRewardsInput, UserUncheckedUpdateWithoutUserRewardsInput>
  }

  export type UserUpdateWithoutUserRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUpdateManyWithoutUserNestedInput
    gameAnswers?: GameAnswerUpdateManyWithoutUserNestedInput
    userPets?: UserPetUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
    vendorRewards?: RewardUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUncheckedUpdateManyWithoutUserNestedInput
    gameAnswers?: GameAnswerUncheckedUpdateManyWithoutUserNestedInput
    userPets?: UserPetUncheckedUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
    vendorRewards?: RewardUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type RewardUpsertWithoutUserRewardsInput = {
    update: XOR<RewardUpdateWithoutUserRewardsInput, RewardUncheckedUpdateWithoutUserRewardsInput>
    create: XOR<RewardCreateWithoutUserRewardsInput, RewardUncheckedCreateWithoutUserRewardsInput>
    where?: RewardWhereInput
  }

  export type RewardUpdateToOneWithWhereWithoutUserRewardsInput = {
    where?: RewardWhereInput
    data: XOR<RewardUpdateWithoutUserRewardsInput, RewardUncheckedUpdateWithoutUserRewardsInput>
  }

  export type RewardUpdateWithoutUserRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: UserUpdateOneRequiredWithoutVendorRewardsNestedInput
  }

  export type RewardUncheckedUpdateWithoutUserRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPetCreateWithoutPetInput = {
    id?: string
    nickname?: string | null
    level?: number
    experience?: number
    isActive?: boolean
    acquiredAt?: Date | string
    user: UserCreateNestedOneWithoutUserPetsInput
  }

  export type UserPetUncheckedCreateWithoutPetInput = {
    id?: string
    userId: string
    nickname?: string | null
    level?: number
    experience?: number
    isActive?: boolean
    acquiredAt?: Date | string
  }

  export type UserPetCreateOrConnectWithoutPetInput = {
    where: UserPetWhereUniqueInput
    create: XOR<UserPetCreateWithoutPetInput, UserPetUncheckedCreateWithoutPetInput>
  }

  export type UserPetCreateManyPetInputEnvelope = {
    data: UserPetCreateManyPetInput | UserPetCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type UserPetUpsertWithWhereUniqueWithoutPetInput = {
    where: UserPetWhereUniqueInput
    update: XOR<UserPetUpdateWithoutPetInput, UserPetUncheckedUpdateWithoutPetInput>
    create: XOR<UserPetCreateWithoutPetInput, UserPetUncheckedCreateWithoutPetInput>
  }

  export type UserPetUpdateWithWhereUniqueWithoutPetInput = {
    where: UserPetWhereUniqueInput
    data: XOR<UserPetUpdateWithoutPetInput, UserPetUncheckedUpdateWithoutPetInput>
  }

  export type UserPetUpdateManyWithWhereWithoutPetInput = {
    where: UserPetScalarWhereInput
    data: XOR<UserPetUpdateManyMutationInput, UserPetUncheckedUpdateManyWithoutPetInput>
  }

  export type UserCreateWithoutUserPetsInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameCreateNestedManyWithoutUserInput
    gameAnswers?: GameAnswerCreateNestedManyWithoutUserInput
    userRewards?: UserRewardCreateNestedManyWithoutUserInput
    userStats?: UserStatsCreateNestedOneWithoutUserInput
    vendorRewards?: RewardCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateWithoutUserPetsInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameUncheckedCreateNestedManyWithoutUserInput
    gameAnswers?: GameAnswerUncheckedCreateNestedManyWithoutUserInput
    userRewards?: UserRewardUncheckedCreateNestedManyWithoutUserInput
    userStats?: UserStatsUncheckedCreateNestedOneWithoutUserInput
    vendorRewards?: RewardUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserCreateOrConnectWithoutUserPetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPetsInput, UserUncheckedCreateWithoutUserPetsInput>
  }

  export type PetCreateWithoutUserPetsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    rarity: string
    knowledgePointsCost: number
    abilities?: PetCreateabilitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PetUncheckedCreateWithoutUserPetsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    rarity: string
    knowledgePointsCost: number
    abilities?: PetCreateabilitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PetCreateOrConnectWithoutUserPetsInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutUserPetsInput, PetUncheckedCreateWithoutUserPetsInput>
  }

  export type UserUpsertWithoutUserPetsInput = {
    update: XOR<UserUpdateWithoutUserPetsInput, UserUncheckedUpdateWithoutUserPetsInput>
    create: XOR<UserCreateWithoutUserPetsInput, UserUncheckedCreateWithoutUserPetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPetsInput, UserUncheckedUpdateWithoutUserPetsInput>
  }

  export type UserUpdateWithoutUserPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUpdateManyWithoutUserNestedInput
    gameAnswers?: GameAnswerUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUpdateOneWithoutUserNestedInput
    vendorRewards?: RewardUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUncheckedUpdateManyWithoutUserNestedInput
    gameAnswers?: GameAnswerUncheckedUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUncheckedUpdateManyWithoutUserNestedInput
    userStats?: UserStatsUncheckedUpdateOneWithoutUserNestedInput
    vendorRewards?: RewardUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type PetUpsertWithoutUserPetsInput = {
    update: XOR<PetUpdateWithoutUserPetsInput, PetUncheckedUpdateWithoutUserPetsInput>
    create: XOR<PetCreateWithoutUserPetsInput, PetUncheckedCreateWithoutUserPetsInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutUserPetsInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutUserPetsInput, PetUncheckedUpdateWithoutUserPetsInput>
  }

  export type PetUpdateWithoutUserPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    abilities?: PetUpdateabilitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateWithoutUserPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    abilities?: PetUpdateabilitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BossQuestionCreateWithoutBossInput = {
    id?: string
    question: QuestionCreateNestedOneWithoutBossQuestionsInput
  }

  export type BossQuestionUncheckedCreateWithoutBossInput = {
    id?: string
    questionId: string
  }

  export type BossQuestionCreateOrConnectWithoutBossInput = {
    where: BossQuestionWhereUniqueInput
    create: XOR<BossQuestionCreateWithoutBossInput, BossQuestionUncheckedCreateWithoutBossInput>
  }

  export type BossQuestionCreateManyBossInputEnvelope = {
    data: BossQuestionCreateManyBossInput | BossQuestionCreateManyBossInput[]
    skipDuplicates?: boolean
  }

  export type BossQuestionUpsertWithWhereUniqueWithoutBossInput = {
    where: BossQuestionWhereUniqueInput
    update: XOR<BossQuestionUpdateWithoutBossInput, BossQuestionUncheckedUpdateWithoutBossInput>
    create: XOR<BossQuestionCreateWithoutBossInput, BossQuestionUncheckedCreateWithoutBossInput>
  }

  export type BossQuestionUpdateWithWhereUniqueWithoutBossInput = {
    where: BossQuestionWhereUniqueInput
    data: XOR<BossQuestionUpdateWithoutBossInput, BossQuestionUncheckedUpdateWithoutBossInput>
  }

  export type BossQuestionUpdateManyWithWhereWithoutBossInput = {
    where: BossQuestionScalarWhereInput
    data: XOR<BossQuestionUpdateManyMutationInput, BossQuestionUncheckedUpdateManyWithoutBossInput>
  }

  export type BossCreateWithoutBossQuestionsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    baseHp: number
    hpPerLevel?: number
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BossUncheckedCreateWithoutBossQuestionsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    baseHp: number
    hpPerLevel?: number
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BossCreateOrConnectWithoutBossQuestionsInput = {
    where: BossWhereUniqueInput
    create: XOR<BossCreateWithoutBossQuestionsInput, BossUncheckedCreateWithoutBossQuestionsInput>
  }

  export type QuestionCreateWithoutBossQuestionsInput = {
    id?: string
    question: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctAnswer: string
    explanation?: string | null
    subject: $Enums.Subject
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gameAnswers?: GameAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutBossQuestionsInput = {
    id?: string
    question: string
    optionA: string
    optionB: string
    optionC: string
    optionD: string
    correctAnswer: string
    explanation?: string | null
    subject: $Enums.Subject
    difficulty: $Enums.Difficulty
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gameAnswers?: GameAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutBossQuestionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutBossQuestionsInput, QuestionUncheckedCreateWithoutBossQuestionsInput>
  }

  export type BossUpsertWithoutBossQuestionsInput = {
    update: XOR<BossUpdateWithoutBossQuestionsInput, BossUncheckedUpdateWithoutBossQuestionsInput>
    create: XOR<BossCreateWithoutBossQuestionsInput, BossUncheckedCreateWithoutBossQuestionsInput>
    where?: BossWhereInput
  }

  export type BossUpdateToOneWithWhereWithoutBossQuestionsInput = {
    where?: BossWhereInput
    data: XOR<BossUpdateWithoutBossQuestionsInput, BossUncheckedUpdateWithoutBossQuestionsInput>
  }

  export type BossUpdateWithoutBossQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    hpPerLevel?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BossUncheckedUpdateWithoutBossQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    baseHp?: IntFieldUpdateOperationsInput | number
    hpPerLevel?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutBossQuestionsInput = {
    update: XOR<QuestionUpdateWithoutBossQuestionsInput, QuestionUncheckedUpdateWithoutBossQuestionsInput>
    create: XOR<QuestionCreateWithoutBossQuestionsInput, QuestionUncheckedCreateWithoutBossQuestionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutBossQuestionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutBossQuestionsInput, QuestionUncheckedUpdateWithoutBossQuestionsInput>
  }

  export type QuestionUpdateWithoutBossQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameAnswers?: GameAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutBossQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    optionA?: StringFieldUpdateOperationsInput | string
    optionB?: StringFieldUpdateOperationsInput | string
    optionC?: StringFieldUpdateOperationsInput | string
    optionD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameAnswers?: GameAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutUserStatsInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameCreateNestedManyWithoutUserInput
    gameAnswers?: GameAnswerCreateNestedManyWithoutUserInput
    userRewards?: UserRewardCreateNestedManyWithoutUserInput
    userPets?: UserPetCreateNestedManyWithoutUserInput
    vendorRewards?: RewardCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateWithoutUserStatsInput = {
    id?: string
    email: string
    username: string
    password: string
    fullName: string
    role?: $Enums.UserRole
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: string | null
    grade?: string | null
    knowledgePoints?: number
    level?: number
    experience?: number
    businessName?: string | null
    businessType?: string | null
    contactPhone?: string | null
    games?: GameUncheckedCreateNestedManyWithoutUserInput
    gameAnswers?: GameAnswerUncheckedCreateNestedManyWithoutUserInput
    userRewards?: UserRewardUncheckedCreateNestedManyWithoutUserInput
    userPets?: UserPetUncheckedCreateNestedManyWithoutUserInput
    vendorRewards?: RewardUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserCreateOrConnectWithoutUserStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
  }

  export type UserUpsertWithoutUserStatsInput = {
    update: XOR<UserUpdateWithoutUserStatsInput, UserUncheckedUpdateWithoutUserStatsInput>
    create: XOR<UserCreateWithoutUserStatsInput, UserUncheckedCreateWithoutUserStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserStatsInput, UserUncheckedUpdateWithoutUserStatsInput>
  }

  export type UserUpdateWithoutUserStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUpdateManyWithoutUserNestedInput
    gameAnswers?: GameAnswerUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUpdateManyWithoutUserNestedInput
    userPets?: UserPetUpdateManyWithoutUserNestedInput
    vendorRewards?: RewardUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateWithoutUserStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUncheckedUpdateManyWithoutUserNestedInput
    gameAnswers?: GameAnswerUncheckedUpdateManyWithoutUserNestedInput
    userRewards?: UserRewardUncheckedUpdateManyWithoutUserNestedInput
    userPets?: UserPetUncheckedUpdateManyWithoutUserNestedInput
    vendorRewards?: RewardUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type GameCreateManyUserInput = {
    id?: string
    status?: $Enums.GameStatus
    difficulty: $Enums.Difficulty
    subject?: $Enums.Subject | null
    currentQuestion?: number
    totalQuestions?: number
    score?: number
    knowledgePointsEarned?: number
    timeStarted?: Date | string
    timeCompleted?: Date | string | null
    bossDefeated?: boolean
    bossHp?: number | null
    bossMaxHp?: number | null
    timerBonus?: number
    shieldActive?: boolean
    kpMultiplier?: number
  }

  export type GameAnswerCreateManyUserInput = {
    id?: string
    gameId: string
    questionId: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
  }

  export type UserRewardCreateManyUserInput = {
    id?: string
    rewardId: string
    status?: $Enums.RewardStatus
    qrCode?: string | null
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserPetCreateManyUserInput = {
    id?: string
    petId: string
    nickname?: string | null
    level?: number
    experience?: number
    isActive?: boolean
    acquiredAt?: Date | string
  }

  export type RewardCreateManyVendorInput = {
    id?: string
    title: string
    description: string
    knowledgePointsCost: number
    imageUrl?: string | null
    category: string
    isActive?: boolean
    stockQuantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    currentQuestion?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    timeStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    timeCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bossDefeated?: BoolFieldUpdateOperationsInput | boolean
    bossHp?: NullableIntFieldUpdateOperationsInput | number | null
    bossMaxHp?: NullableIntFieldUpdateOperationsInput | number | null
    timerBonus?: IntFieldUpdateOperationsInput | number
    shieldActive?: BoolFieldUpdateOperationsInput | boolean
    kpMultiplier?: FloatFieldUpdateOperationsInput | number
    gameAnswers?: GameAnswerUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    currentQuestion?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    timeStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    timeCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bossDefeated?: BoolFieldUpdateOperationsInput | boolean
    bossHp?: NullableIntFieldUpdateOperationsInput | number | null
    bossMaxHp?: NullableIntFieldUpdateOperationsInput | number | null
    timerBonus?: IntFieldUpdateOperationsInput | number
    shieldActive?: BoolFieldUpdateOperationsInput | boolean
    kpMultiplier?: FloatFieldUpdateOperationsInput | number
    gameAnswers?: GameAnswerUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    currentQuestion?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    timeStarted?: DateTimeFieldUpdateOperationsInput | Date | string
    timeCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bossDefeated?: BoolFieldUpdateOperationsInput | boolean
    bossHp?: NullableIntFieldUpdateOperationsInput | number | null
    bossMaxHp?: NullableIntFieldUpdateOperationsInput | number | null
    timerBonus?: IntFieldUpdateOperationsInput | number
    shieldActive?: BoolFieldUpdateOperationsInput | boolean
    kpMultiplier?: FloatFieldUpdateOperationsInput | number
  }

  export type GameAnswerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutGameAnswersNestedInput
  }

  export type GameAnswerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameAnswerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRewardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: RewardUpdateOneRequiredWithoutUserRewardsNestedInput
  }

  export type UserRewardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRewardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutUserPetsNestedInput
  }

  export type UserPetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRewards?: UserRewardUpdateManyWithoutRewardNestedInput
  }

  export type RewardUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRewards?: UserRewardUncheckedUpdateManyWithoutRewardNestedInput
  }

  export type RewardUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    knowledgePointsCost?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameAnswerCreateManyQuestionInput = {
    id?: string
    gameId: string
    userId: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
  }

  export type BossQuestionCreateManyQuestionInput = {
    id?: string
    bossId: string
  }

  export type GameAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameAnswersNestedInput
    user?: UserUpdateOneRequiredWithoutGameAnswersNestedInput
  }

  export type GameAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BossQuestionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    boss?: BossUpdateOneRequiredWithoutBossQuestionsNestedInput
  }

  export type BossQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bossId?: StringFieldUpdateOperationsInput | string
  }

  export type BossQuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bossId?: StringFieldUpdateOperationsInput | string
  }

  export type GameAnswerCreateManyGameInput = {
    id?: string
    questionId: string
    userId: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
    knowledgePointsEarned?: number
    answeredAt?: Date | string
  }

  export type GameAnswerUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutGameAnswersNestedInput
    user?: UserUpdateOneRequiredWithoutGameAnswersNestedInput
  }

  export type GameAnswerUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameAnswerUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    knowledgePointsEarned?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRewardCreateManyRewardInput = {
    id?: string
    userId: string
    status?: $Enums.RewardStatus
    qrCode?: string | null
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserRewardUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRewardsNestedInput
  }

  export type UserRewardUncheckedUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRewardUncheckedUpdateManyWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPetCreateManyPetInput = {
    id?: string
    userId: string
    nickname?: string | null
    level?: number
    experience?: number
    isActive?: boolean
    acquiredAt?: Date | string
  }

  export type UserPetUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPetsNestedInput
  }

  export type UserPetUncheckedUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPetUncheckedUpdateManyWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BossQuestionCreateManyBossInput = {
    id?: string
    questionId: string
  }

  export type BossQuestionUpdateWithoutBossInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutBossQuestionsNestedInput
  }

  export type BossQuestionUncheckedUpdateWithoutBossInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type BossQuestionUncheckedUpdateManyWithoutBossInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}