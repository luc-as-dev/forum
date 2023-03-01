export const API_URL = import.meta.env.VITE_SOME_SERVER_URL;

export function fixUser(user) {
  const fixedUser = {
    id: user._id,
    name: user.name,
    email: user.email,
    dateOfBirth: user.dateOfBirth,
    profile: {
      firstName: user.profile.firstName,
      lastName: user.profile.lastName,
      avatar: `https://api.dicebear.com/5.x/${user.profile.avatar.styleName}/svg?seed=${user.profile.avatar.seed}`,
      bio: user.profile.bio,
    },
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
  return fixedUser;
}
