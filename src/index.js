function normalize(user) {
  const normalized = {
    gender: null,
    age: null,
    state: null
  };
  if (!user)
    return normalized;

  if (user.gender?.toUpperCase() === 'MALE' || user.gender?.toUpperCase() === 'M')
    normalized.gender = 'M';

  if (user.gender?.toUpperCase() === 'FEMALE' || user.gender?.toUpperCase() === 'F')
    normalized.gender = 'F';

  normalized.age = parseInt(user.age, 10);

  normalized.state = user.state?.toUpperCase();
  return normalized;
}

window.hbc = {};
window.hbc.imageNameForDemographic = (user) => {
 const normalizedUser = normalize(user);
  if (normalizedUser.state === 'TX')
    return '1.jpg';
  if (normalizedUser.state === 'MN' && normalizedUser.age > 23)
    return '2.jpg';
  if (normalizedUser.age > 70)
    return '3.jpg';
  if (normalizedUser.age > 12 && normalizedUser.age < 18 && ['DE', 'ME'].includes(normalizedUser.state))
    return '4.jpg';
  if (normalizedUser.gender === 'F' && (normalizedUser.age > 23 && normalizedUser.age < 30) || (normalizedUser.age > 50 && normalizedUser.age < 70))
    return '5.jpg';
  if (normalizedUser.gender === 'M')
    return '1.jpg';
  return '6.jpg';
};
