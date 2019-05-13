class FeedbackView extends BaseView {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
