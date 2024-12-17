/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (numCourses <= 0) {
    return true;
  }

  const edgeMap = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    if (!edgeMap.has(prerequisites[i][0])) {
      edgeMap.set(prerequisites[i][0], []);
    }
    let pre = edgeMap.get(prerequisites[i][0]);
    edgeMap.set(prerequisites[i][0], pre.concat(prerequisites[i][1]));
  }

  let result = true;
  let flags = [];
  const dfs = (key) => {
    if (!result) return false;
    if (flags[key] === 1) return false;
    if (flags[key] === -1) return true;

    let preCourses = edgeMap.get(key);

    flags[key] = 1;
    if (preCourses)
      preCourses.forEach((course) => {
        result = dfs(course);
      });
    flags[key] = -1;
    return result;
  };
  edgeMap.forEach((preCourses, key) => {
    if (!result) return;
    result = dfs(key);
  });
  return result;
};
