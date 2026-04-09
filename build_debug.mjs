import { build } from 'vite';
import fs from 'fs';

async function runBuild() {
  try {
    await build();
    console.log("Build successful!");
  } catch (err) {
    let output = "BUILD ERROR:\n" + err.message + "\n";
    if (err.frame) output += err.frame + "\n";
    if (err.loc) output += JSON.stringify(err.loc) + "\n";
    output += JSON.stringify(err, Object.getOwnPropertyNames(err), 2);
    fs.writeFileSync('build_error_fs.log', output, 'utf8');
  }
}

runBuild();
