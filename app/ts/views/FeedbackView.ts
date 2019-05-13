import { BaseView } from "./BaseView";

/**
 * View to return feedbacks to the user
 */
export class FeedbackView extends BaseView<string> {

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }
}