function NoWatchTime() {
  const { Platform } = Spicetify;
  if (!Platform) {
    setTimeout(NoWatchTime, 300);
    return;
  }

  console.log(
    "%c[No Watch Time] Enabling NoWatchTime",
    "color: #1DB954; font-size: 7px;"
  );
  setInterval(() => {
    Spicetify.Platform.AdManagers.audio.audioApi.cosmosConnector.increaseStreamTime(-100000000000);
    console.log(
      "%c[No Watch Time] Blocked!",
      "color: #1DB954; font-size: 7px;"
    );
  }, 500);
}
NoWatchTime();
