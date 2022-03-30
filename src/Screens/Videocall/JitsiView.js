import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import JitsiMeet,{JitsiMeetView} from 'react-native-jitsi-meet';

const JitsiView = () => {
  // const onConferenceTerminated = nativeEvent => {
  //   /* Conference terminated event */
  // };

  // const onConferenceJoined = nativeEvent => {
  //   /* Conference joined event */
  // };

  // const onConferenceWillJoin = nativeEvent => {
  //   /* Conference will join event */
  // };

  //   React.useEffect(() => {
  //     setTimeout(() => {
  //       const url = 'https://meet.jit.si/deneme'; // can also be only room name and will connect to jitsi meet servers
  //       const userInfo = {
  //         displayName: 'Kelis',
  //         email: 'Kelis.iqlacne@gmail.com',
  //         avatar: 'https:/gravatar.com/avatar/abc123',
  //       };
  //       const options = {
  //         audioMuted: false,
  //         audioOnly: false,
  //         videoMuted: false,
  //         subject: 'Meeting',
  //         // token: 'your token',
  //       };
  //       const meetFeatureFlags = {
  //         addPeopleEnabled: true,
  //         calendarEnabled: true,
  //         callIntegrationEnabled: true,
  //         chatEnabled: true,
  //         closeCaptionsEnabled: true,
  //         inviteEnabled: true,
  //         androidScreenSharingEnabled: true,
  //         liveStreamingEnabled: true,
  //         meetingNameEnabled: true,
  //         meetingPasswordEnabled: true,
  //         pipEnabled: true,
  //         kickOutEnabled: true,
  //         conferenceTimerEnabled: true,
  //         videoShareButtonEnabled: true,
  //         recordingEnabled: true,
  //         reactionsEnabled: true,
  //         raiseHandEnabled: true,
  //         tileViewEnabled: true,
  //         toolboxAlwaysVisible: false,
  //         toolboxEnabled: true,
  //         welcomePageEnabled: false,
  //       };
  //       JitsiMeet.call(url, userInfo, options,meetFeatureFlags);
  //       /* You can also use JitsiMeet.audioCall(url) for audio only call */
  //       /* You can programmatically end the call with JitsiMeet.endCall() */
  //     }, 1000);
  //   }, []);

  //   return (
  //     <View style={{backgroundColor: 'black', flex: 1}}>
  //       <JitsiMeetView
  //         onConferenceTerminated={onConferenceTerminated}
  //         onConferenceJoined={onConferenceJoined}
  //         onConferenceWillJoin={onConferenceWillJoin}
  //         style={{flex: 1, height: '100%', width: '100%'}}
  //       />
  //     </View>
  //   );
  // };

  React. useEffect(() => {
    setTimeout(() => {
      const url = 'https://meet.jit.si/KelisMeeting';
      const userInfo = {
        displayName: 'Kelis',
        email: 'Kelis.iqlance@gmail.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      JitsiMeet.call(url, userInfo);
      /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
      /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
    }, 1000);
  }, []);

  // React.useEffect(() => {
  //   return () => {
  //     JitsiMeet.endCall();
  //   };
  // });

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log(nativeEvent);
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log(nativeEvent);
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log(nativeEvent);
  }
  return (
    <JitsiMeetView

      onConferenceTerminated={e => onConferenceTerminated(e)}
      onConferenceJoined={e => onConferenceJoined(e)}
      onConferenceWillJoin={e => onConferenceWillJoin(e)}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor:'black'
      }}
    />
  );
};
export default JitsiView;
