/**
 * View to return feedbacks to the user
 */
class FeedbackView extends BaseView {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
