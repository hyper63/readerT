import { assertEquals } from "./deps.ts";
import { Task } from "./deps.ts";
import ReaderT from "./mod.ts";

const TaskReader = ReaderT(Task);
const { of, ask, lift } = TaskReader;

Deno.test("hello", () => {
  of("hello")
    .map((v: string) => v.toUpperCase())
    .chain((v: string) =>
      ask(
        (env: any) => env.exclaim ? Task.resolve(`${v}!`) : Task.resolve(v),
      )
    )
    .chain((task: any) => lift(task))
    .runWith({ exclaim: true })
    .fork(
      (e: string) => assertEquals(false, true),
      (r: string) => assertEquals(r, "HELLO!"),
    );
});
