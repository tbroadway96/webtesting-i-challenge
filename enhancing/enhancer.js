module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    const succeeded = {
      name: item.name, 
      enhancement: item.enhancement + 1,
      durability: item.durability
    }
    return succeeded;
  } else {
    const didNotSucceed = {
      name: item.name, 
      enhancement: item.enhancement, 
      durability: item.durability
    }
    return didNotSucceed;
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    const failed = {
      name: item.name,
      enhancement: item.enhancement,
      durability: item.durability - 5
    }
    return failed

  } else if (item.enhancement > 15) {
    const failed = {
      name: item.name,
      enhancement: item.enhancement,
      durability: item.durability - 10
    }
    return failed

  } else if (item.enhancement > 16) {
    const failed = {
      name: item.name,
      enhancement: item.enhancement - 1,
      durability: item.durability
    }
    return failed;
  }
}

function repair(item) {
  if (item.durability === 0 || item.durability < 101) {
    const repaired = {
      name: item.name,
      enhancement: item.enhancement,
      durability: item.durability = 100
    }
    return repaired;
  }
}

function get(item) {
  return { ...item };
}
