<template>
  <div class="page-layout">
    <div>
      순서 바꾸는 컴포넌트 예시
      <draggable 
        v-model="myArray" 
        group="people" 
        @start="drag=true" 
        @end="drag=false" 
        item-key="id">
        <template #item="{element}">
          <div>{{element.name}}</div>
        </template>
      </draggable>
    </div>
    <div>
      <MainPersonInputComponent />
      <MainImageCreateComponent />
      <MusicCreateComponent />
      <MainPersonCreateComponent />
      <ParentCreateComponent />
      <MapCreateComponent />
      <GreetingMessageCreateComponent />
      <ContactCreateComponent />
      <HallDetailCreateComponent />
      <!-- <WeddingDateCreateComponent /> -->
      <InvitationMessageCreateComponent />
      <SinceTimeCreateComponent />
      <RemainingTimeCreateComponent />
      <RSVPCreateComponent />
      <GalleryCreateComponent />
      <VideoCreateComponent />
      <TimelineCreateComponent />
      <AccountInfoCreateComponent />
      <GestInformationCreateComponent />
      <!-- <DresscodeCreateComponent /> -->
      <MessageBoardCreateComponent />
      <PageAnimationCreateComponent />
    </div>
    <div>결과물 보여주는 컴포넌트</div>
    <div>속성 편집하는 컴포넌트</div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import MainImageCreateComponent from '@/components/create/MainImageCreateComponent.vue';
import MusicCreateComponent from '@/components/create/MusicCreateComponent.vue';
import MainPersonCreateComponent from '@/components/create/MainPersonCreateComponent.vue';
import ParentCreateComponent from '@/components/create/ParentCreateComponent.vue';
import MapCreateComponent from '@/components/create/MapCreateComponent.vue';
import GreetingMessageCreateComponent from '@/components/create/GreetingMessageCreateComponent.vue';
import ContactCreateComponent from '@/components/create/ContactCreateComponent.vue';
import HallDetailCreateComponent from '@/components/create/HallDetailCreateComponent.vue';
// // import WeddingDateCreateComponent from '@/components/create/WeddingDateCreateComponent.vue';
import InvitationMessageCreateComponent from '@/components/create/InvitationMessageCreateComponent.vue';
import SinceTimeCreateComponent from '@/components/create/SinceTimeCreateComponent.vue';
import RemainingTimeCreateComponent from '@/components/create/RemainingTimeCreateComponent.vue';
import RSVPCreateComponent from '@/components/create/RSVPCreateComponent.vue';
import GalleryCreateComponent from '@/components/create/GalleryCreateComponent.vue';
import VideoCreateComponent from '@/components/create/VideoCreateComponent.vue';
import TimelineCreateComponent from '@/components/create/TimelineCreateComponent.vue';
import AccountInfoCreateComponent from '@/components/create/AccountInfoCreateComponent.vue';
import GestInformationCreateComponent from '@/components/create/GestInformationCreateComponent.vue';
// // import DresscodeCreateComponent from '@/components/create/DresscodeCreateComponent.vue';
import MessageBoardCreateComponent from '@/components/create/MessageBoardCreateComponent.vue';
import PageAnimationCreateComponent from '@/components/create/PageAnimationCreateComponent.vue';


export default {
  name: 'CreateMobileInvitationPage',
  data() {
    return {
      drag: false,
      myArray: [
        {
          "name": "vue.draggable",
          "order": 1
        },
        {
          "name": "draggable",
          "order": 2
        },
        {
          "name": "component",
          "order": 3
        },
        {
          "name": "for",
          "order": 4
        },
        {
          "name": "based",
          "order": 6
        },
        {
          "name": "vue.js 2.0",
          "order": 5
        },
        {
          "name": "on",
          "order": 7
        },
        {
          "name": "Sortablejs",
          "order": 8
        }
      ],
    }
  },
  components: {
    draggable,
    MainImageCreateComponent,
    MusicCreateComponent,
    MainPersonCreateComponent,
    ParentCreateComponent,
    MapCreateComponent,
    GreetingMessageCreateComponent,
    ContactCreateComponent,
    HallDetailCreateComponent,
    // WeddingDateCreateComponent,
    InvitationMessageCreateComponent,
    SinceTimeCreateComponent,
    RemainingTimeCreateComponent,
    RSVPCreateComponent,
    GalleryCreateComponent,
    VideoCreateComponent,
    TimelineCreateComponent,
    AccountInfoCreateComponent,
    GestInformationCreateComponent,
    // DresscodeCreateComponent,
    MessageBoardCreateComponent,
    PageAnimationCreateComponent,
  },
};
</script>

<style scoped>
.page-layout {
  display: flex;
  flex-direction: columns;

}
</style>