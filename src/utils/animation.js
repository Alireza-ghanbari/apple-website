export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secoundTarget,
  animateProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animateProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secoundTarget,
    {
      ...animateProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
