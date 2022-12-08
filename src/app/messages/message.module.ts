import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "../shared/shared.module";
import { MessageChatComponent } from "./message-chat/message-chat.component";
import { ScrollToBottomDirective } from "./message-chat/scroll-to-bottom.directive";
import { MessageListComponent } from "./message-list/message-list.component";

import { WebsocketService } from "../services/web-socket.service";
import { MessageShellComponent } from "./message-shell/message-shell.component";
import { MessageEffects } from "./state/message.effects";
import { messageReducer } from "./state/message.reducer";

const messageRoutes: Routes = [{ path: "", component: MessageShellComponent }];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(messageRoutes),
    StoreModule.forFeature("messages", messageReducer),
    EffectsModule.forFeature([MessageEffects]),
  ],
  declarations: [
    MessageShellComponent,
    MessageListComponent,
    MessageChatComponent,
    ScrollToBottomDirective,
  ],
  providers: [WebsocketService],
})
export class MessageModule {}
