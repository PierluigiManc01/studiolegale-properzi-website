// Last-modified dates come from git history, never from a hand-edited value:
// the date of the latest commit that touched the files a page is built from.
//
// Returns null when git cannot answer reliably (no git, or a shallow clone,
// where every file would report the date of the single fetched commit). Callers
// then leave the date out, which is better than publishing a wrong one.

import { execFileSync } from "node:child_process";

const git = (args) => execFileSync("git", args, { encoding: "utf-8", stdio: ["ignore", "pipe", "ignore"] }).trim();

let shallow;
const isShallow = () => {
  if (shallow === undefined) {
    try {
      shallow = git(["rev-parse", "--is-shallow-repository"]) === "true";
      if (shallow) {
        // Vercel and most CI systems clone shallowly: try to get the history.
        try {
          git(["fetch", "--unshallow", "--quiet"]);
          shallow = git(["rev-parse", "--is-shallow-repository"]) === "true";
        } catch {
          // stays shallow
        }
      }
    } catch {
      shallow = true;
    }
  }
  return shallow;
};

export const gitLastModified = (files) => {
  if (isShallow()) return null;
  try {
    const out = git(["log", "-1", "--format=%cs", "--", ...files]);
    return out || null;
  } catch {
    return null;
  }
};
