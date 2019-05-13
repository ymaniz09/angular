/**
 * View to return feedbacks to the user
 */
class FeedbackView extends BaseView<string> {

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }
}