// Implement the SocialNetwork class here
/* "It's a class that represents a social network, and it has methods that allow you to add users,
follow users, get users, get follows, get followers, and get recommended follows."

The class has a constructor that initializes the users and follows properties. The users property is
an object that contains all the users in the system. The follows property is an object that contains
the users that each user is following */
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }


  /**
   * It adds a user to the users object, and adds a new set to the follows object
   * @param name - The name of the user to add.
   * @returns The id of the user.
   */
  addUser(name) {
    const id = Object.keys(this.users).length + 1;

    const follows = new Set();
    const user = { id: id, name: name };
    [this.users[id], this.follows[id]] = [user, new Set()];

    return id;
  }

  /**
   * Return the user object with the given userID, or null if no such user exists.
   * @param userID - The user's ID.
   * @returns The user object with the userID property.
   */
  getUser(userID) {
    return this.users[userID] || null;
  }

  /**
   * If both users exist, add the second user to the first user's set of followers.
   * @param userID1 - The ID of the user who is following
   * @param userID2 - The user ID of the user to follow.
   * @returns A boolean value.
   */
  follow(userID1, userID2) {
    // bail if either user id is missing
    if (!this.users[userID1]) return false;
    if (!this.users[userID2]) return false;

    // add the user
    this.follows[userID1].add(userID2);
    return true;
  }

  /**
   * It returns the value of the follows property of the current instance of the User class, which is
   * an object that contains the user IDs of the users that the current user follows
   * @param userID - The user ID of the user you want to get the follows of.
   * @returns An array of userIDs that the userID is following.
   */
  getFollows(userID) {
    return this.follows[userID];
  }

  /**
   * We loop through all the users in the system, and if the user is following the userID we're looking
   * for, we add that user to the set of followers
   * @param userID - the ID of the user to get the followers of
   * @returns A set of all the followers of the userID
   */
  getFollowers(userID) {
    const followers = new Set();
    for (let key in this.users) {
      key = +key;
      if (this.follows[key].has(userID) && key !== userID) {
        followers.add(key);
      }
    }
    return followers;
  }

  /**
   * "Get all the users that are within a certain number of degrees of separation from a given user."
   * 
   * The function takes two arguments:
   * 
   * userID: The ID of the user to start from.
   * degrees: The number of degrees of separation to look for.
   * The function returns an array of user IDs
   * @param userID - the user ID of the user we want to find recommendations for
   * @param degrees - The number of degrees of separation to search for.
   * @returns An array of user IDs that are recommended to follow.
   */
  getRecommendedFollows(userID, degrees) {
    const queue = [[userID]];
    const visited = new Set();

    const recommended = [];

    while (queue.length > 0) {
      const path = queue.shift();
      const index = path.length - 1;
      const user = path[index];

      // don't repeat visit
      if (!visited.has(user)) {
        visited.add(user);

        // include if user is close enough
        if (index > 1 && index <= degrees + 1) {
          recommended.push(user);
        }

        // check the user's follows too
        this.getFollows(user).forEach(
          id => queue.push([...path, id])
        );
      }
    }

    return recommended;
  }
}

module.exports = SocialNetwork;