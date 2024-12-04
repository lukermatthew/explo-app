import hiking from "@/assets/images/communities/traveling.png";
import cycling from "@/assets/images/communities/cycling.png";
import camping from "@/assets/images/communities/tent.png";
import fishing from "@/assets/images/communities/fisherman.png";
import diving from "@/assets/images/communities/diving.png";
import sports from "@/assets/images/communities/sports.png";
import gardening from "@/assets/images/communities/gardening.png";
import gym from "@/assets/images/communities/dumbbell.png";
import baking from "@/assets/images/communities/baking.png";
import band from "@/assets/images/communities/band.png";

export const communities = [
  { id: "10", name: "Music Community", icon: band, route: "music" },
  { id: "7", name: "Gardening Community", icon: gardening, route: "gardening" },
  { id: "8", name: "Baking Community", icon: baking, route: "baking" },
  { id: "9", name: "Gym Community", icon: gym, route: "gym" },
  { id: "1", name: "Hiking Community", icon: hiking, route: "hiking" },
  { id: "2", name: "Cycling Community", icon: cycling, route: "cycling" },
  { id: "3", name: "Camping Community", icon: camping, route: "camping" },
  { id: "4", name: "Fishing Community", icon: fishing, route: "fishing" },
  { id: "5", name: "Diving Community", icon: diving, route: "diving" },
  { id: "6", name: "Sports Community", icon: sports, route: "sports" },
];

export const badges = [
  {
    id: "1",
    name: "Newbie",
    description: "Awarded for completing the first activity.",
    icon: hiking,
  },
  {
    id: "2",
    name: "Weekend Warrior",
    description: "Awarded for completing activities on weekends.",
    icon: cycling,
  },
  {
    id: "3",
    name: "Explorer",
    description: "Awarded for completing 10+ activities.",
    icon: camping,
  },
  {
    id: "4",
    name: "Adventurer",
    description: "Awarded for completing 20+ activities in various categories.",
    icon: fishing,
  },
  {
    id: "5",
    name: "Master Explorer",
    description: "Awarded for completing 50+ diverse experiences.",
    icon: diving,
  },
  {
    id: "6",
    name: "Art Enthusiast",
    description: "For completing art-related activities.",
    icon: band,
  },
  {
    id: "7",
    name: "Foodie",
    description: "For attending cooking classes, tastings, or food tours.",
    icon: baking,
  },
  {
    id: "8",
    name: "Fitness Buff",
    description: "For participating in physical or outdoor activities.",
    icon: gym,
  },
  {
    id: "9",
    name: "Nature Lover",
    description: "For participating in eco-tours or nature walks.",
    icon: gardening,
  },
  {
    id: "10",
    name: "Tech Savvy",
    description: "For joining tech or science-related workshops.",
    icon: sports,
  },
  {
    id: "11",
    name: "Social Butterfly",
    description: "Awarded for bringing friends or family to activities.",
    icon: band,
  },
  {
    id: "12",
    name: "Connector",
    description: "For referring new users to Explo.",
    icon: gardening,
  },
  {
    id: "13",
    name: "Reviewer",
    description: "For writing reviews after completing an activity.",
    icon: hiking,
  },
  {
    id: "14",
    name: "Top Reviewer",
    description: "For submitting 10+ high-quality reviews.",
    icon: cycling,
  },
  {
    id: "15",
    name: "Community Star",
    description: "Earned through receiving high ‘helpful’ ratings on reviews.",
    icon: sports,
  },
  {
    id: "16",
    name: "Seasonal Adventurer",
    description: "Awarded for completing special seasonal quests.",
    icon: camping,
  },
  {
    id: "17",
    name: "Holiday Hero",
    description: "For participating in holiday season activities.",
    icon: band,
  },
  {
    id: "18",
    name: "Monthly Challenge Champion",
    description: "For completing all quests in a monthly challenge.",
    icon: cycling,
  },
  {
    id: "19",
    name: "Partner Quest Badge",
    description: "For completing activities associated with partner merchants.",
    icon: diving,
  },
  {
    id: "23",
    name: "Goal Setter",
    description: "For creating and completing a custom activity goal.",
    icon: hiking,
  },
  {
    id: "24",
    name: "Bucket Lister",
    description: "For completing activities from your personal list.",
    icon: camping,
  },
  {
    id: "25",
    name: "Milestone Maker",
    description:
      "Awarded for hitting milestones like completing 5, 25, or 50 activities.",
    icon: gardening,
  },
  {
    id: "26",
    name: "Event Goer",
    description: "For attending Explo-sponsored events.",
    icon: band,
  },
  {
    id: "27",
    name: "Launch Participant",
    description: "For joining activities at new merchants or locations.",
    icon: diving,
  },
  {
    id: "28",
    name: "Beta Tester",
    description: "For testing new features or activity types.",
    icon: sports,
  },
];

export const posts = [
  {
    id: "1",
    title: "Top 10 Hiking Trails",
    community: "1",
    postedBy: "John Red",
    profileImage: hiking,
    thumbnailImage: "https://example.com/hiking-thumbnail.jpg",
    createdAt: "2023-11-20T09:00:00Z",
    body: "Hiking trails are a great way to explore the outdoors. Here are some of the best hiking trails in the US.",
    upVote: 10,
    downVote: 2,
    comments: 15,
    userBadges: ["1", "3", "13"],
  },
  {
    id: "2",
    title: "Best Cycling Gear for Beginners",
    community: "2",
    postedBy: "Jane Brown",
    profileImage: cycling,
    thumbnailImage: "https://example.com/cycling-thumbnail.jpg",
    createdAt: "2023-11-19T15:00:00Z",
    body: "Looking for the best cycling gear for beginners? Here are some recommendations.",
    upVote: 8,
    downVote: 1,
    comments: 12,
    userBadges: ["2", "8", "15"],
  },
  {
    id: "3",
    title: "Camping Essentials: What to Pack",
    community: "3",
    postedBy: "Alice Smith",
    profileImage: camping,
    thumbnailImage: "https://example.com/camping-thumbnail.jpg",
    createdAt: "2023-11-18T18:30:00Z",
    body: "Packing for camping can be a challenge, but here are some essential items to consider.",
    upVote: 12,
    downVote: 0,
    comments: 18,
    userBadges: ["3", "5", "24"],
  },
  {
    id: "4",
    title: "Fishing Tips for Beginners",
    community: "4",
    postedBy: "Bob Blue",
    profileImage: fishing,
    thumbnailImage: "https://example.com/fishing-thumbnail.jpg",
    createdAt: "2023-11-17T14:00:00Z",
    body: "If you're new to fishing, here are some tips to help you get started.",
    upVote: 5,
    downVote: 1,
    comments: 7,
    userBadges: ["1", "12"],
  },
  {
    id: "5",
    title: "Dive Spots Around the World",
    community: "5",
    postedBy: "Jane Diver",
    profileImage: diving,
    thumbnailImage: "https://example.com/diving-thumbnail.jpg",
    createdAt: "2023-11-16T10:45:00Z",
    body: "Discover the best dive spots around the world.",
    upVote: 9,
    downVote: 3,
    comments: 10,
    userBadges: [],
  },
  {
    id: "6",
    title: "How to Improve Your Sports Performance",
    community: "6",
    postedBy: "Alice Pro",
    profileImage: sports,
    thumbnailImage: "https://example.com/sports-thumbnail.jpg",
    createdAt: "2023-11-15T13:15:00Z",
    body: "Learn how to improve your sports performance.",
    upVote: 11,
    downVote: 2,
    comments: 13,
    userBadges: ["2", "8", "23", "25"],
  },
  {
    id: "7",
    title: "Gardening Hacks for Small Spaces",
    community: "7",
    postedBy: "Jane Green",
    profileImage: gardening,
    thumbnailImage: "https://example.com/gardening-thumbnail.jpg",
    createdAt: "2023-11-14T09:25:00Z",
    body: "Learn gardening hacks for small spaces.",
    upVote: 6,
    downVote: 0,
    comments: 8,
    userBadges: ["1", "9", "25"],
  },
  {
    id: "8",
    title: "Easy Recipes for Baking Bread",
    community: "8",
    postedBy: "Alice Baker",
    profileImage: baking,
    thumbnailImage: "https://example.com/baking-thumbnail.jpg",
    createdAt: "2023-11-13T17:50:00Z",
    body: "Learn how to make easy recipes for baking bread.",
    upVote: 15,
    downVote: 1,
    comments: 20,
    userBadges: ["7", "11", "14"],
  },
  {
    id: "9",
    title: "Benefits of Gym Workouts",
    community: "9",
    postedBy: "Bob Fit",
    profileImage: gym,
    thumbnailImage: "https://example.com/gym-thumbnail.jpg",
    createdAt: "2023-11-12T11:45:00Z",
    body: "Discover the benefits of gym workouts.",
    upVote: 7,
    downVote: 2,
    comments: 9,
    userBadges: ["8", "25"],
  },
  {
    id: "10",
    title: "How Music Helps with Stress",
    community: "10",
    postedBy: "John Melody",
    profileImage: band,
    thumbnailImage: "https://example.com/music-thumbnail.jpg",
    createdAt: "2023-11-11T16:10:00Z",
    body: "Learn how music helps with stress.",
    upVote: 14,
    downVote: 0,
    comments: 18,
    userBadges: ["6", "11", "26"],
  },
];

export const comments = [
  // Comments for Post 1
  {
    id: "1",
    postId: "1",
    parentCommentId: null, // Top-level comment
    commentedBy: "Jane Smith",
    content: "Great post! I’ve been looking for new hiking trails.",
    upVotes: 12,
    downVotes: 0,
    timestamp: "2023-11-20T10:00:00Z",
  },
  {
    id: "2",
    postId: "1",
    parentCommentId: "1", // Reply to comment 1
    commentedBy: "John Red",
    content: "Thanks, Jane! Let me know if you try any of these trails.",
    upVotes: 8,
    downVotes: 0,
    timestamp: "2023-11-20T11:00:00Z",
  },
  {
    id: "3",
    postId: "1",
    parentCommentId: "2", // Reply to comment 2 (nested reply)
    commentedBy: "Jane Smith",
    content: "Will do! Which one is your favorite?",
    upVotes: 5,
    downVotes: 0,
    timestamp: "2023-11-20T12:00:00Z",
  },
  {
    id: "4",
    postId: "1",
    parentCommentId: null, // Another top-level comment
    commentedBy: "Alice Pro",
    content: "Thanks for sharing this! Do you have any tips for beginners?",
    upVotes: 6,
    downVotes: 1,
    timestamp: "2023-11-20T13:00:00Z",
  },

  // Comments for Post 2
  {
    id: "5",
    postId: "2",
    parentCommentId: null, // Top-level comment
    commentedBy: "Bob Blue",
    content:
      "Cycling gear can get expensive. Do you recommend any budget options?",
    upVotes: 10,
    downVotes: 2,
    timestamp: "2023-11-19T16:00:00Z",
  },
  {
    id: "6",
    postId: "2",
    parentCommentId: "5", // Reply to comment 5
    commentedBy: "Jane Brown",
    content: "Definitely! I recommend checking out local stores for sales.",
    upVotes: 7,
    downVotes: 0,
    timestamp: "2023-11-19T17:00:00Z",
  },

  // Comments for Post 3
  {
    id: "7",
    postId: "3",
    parentCommentId: null, // Top-level comment
    commentedBy: "Alice Smith",
    content:
      "Packing essentials can make or break a trip. Thanks for the guide!",
    upVotes: 9,
    downVotes: 0,
    timestamp: "2023-11-18T19:00:00Z",
  },
  {
    id: "8",
    postId: "3",
    parentCommentId: "7", // Reply to comment 7
    commentedBy: "John Melody",
    content: "Completely agree! Any recommendations for lightweight tents?",
    upVotes: 4,
    downVotes: 0,
    timestamp: "2023-11-18T20:00:00Z",
  },
  {
    id: "9",
    postId: "3",
    parentCommentId: "8", // Nested reply
    commentedBy: "Alice Smith",
    content: "Yes! Check out XYZ brand, they have great options.",
    upVotes: 6,
    downVotes: 0,
    timestamp: "2023-11-18T21:00:00Z",
  },

  // Comments for Post 4
  {
    id: "10",
    postId: "4",
    parentCommentId: null, // Top-level comment
    commentedBy: "Bob Blue",
    content: "Fishing is so relaxing. What’s your go-to bait?",
    upVotes: 8,
    downVotes: 1,
    timestamp: "2023-11-17T15:00:00Z",
  },
  {
    id: "11",
    postId: "4",
    parentCommentId: "10", // Reply to comment 10
    commentedBy: "John Red",
    content: "I usually go with live bait for freshwater fishing.",
    upVotes: 5,
    downVotes: 0,
    timestamp: "2023-11-17T16:00:00Z",
  },

  // Comments for Post 5
  {
    id: "12",
    postId: "5",
    parentCommentId: null, // Top-level comment
    commentedBy: "Jane Diver",
    content:
      "Dive spots vary so much! Which ones are accessible for beginners?",
    upVotes: 9,
    downVotes: 1,
    timestamp: "2023-11-16T11:00:00Z",
  },
  {
    id: "13",
    postId: "5",
    parentCommentId: "12", // Reply to comment 12
    commentedBy: "Alice Pro",
    content:
      "Try some of the dive spots in Thailand. They’re beginner-friendly!",
    upVotes: 6,
    downVotes: 0,
    timestamp: "2023-11-16T12:00:00Z",
  },
];


export function getNestedComments(postId) {
  const postComments = comments.filter((comment) => comment.postId === postId);

  const buildNestedComments = (comments, parentId = null) => {
    return comments
      .filter((comment) => comment.parentCommentId === parentId)
      .map((comment) => ({
        ...comment,
        replies: buildNestedComments(comments, comment.id),
      }));
  };

  return buildNestedComments(postComments);
}

export function findCommunityPosts(id: string) {
  return posts.find((posts) => posts.community === id);
}

export function findPostsCommunity(id: string) {
  return communities.find((communities) => communities.id === id);
}

export function getBadgeById(id: string) {
  return badges.find((badge) => badge.id === id);
}

