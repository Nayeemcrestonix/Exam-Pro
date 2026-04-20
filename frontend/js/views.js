// Consolidated Views for EliteQuiz v2 - Final Leaderboard Patch
const Views = {
    header() {
        const user = Auth.getUser();
        return `
            <nav class="navbar">
                <div class="container" style="display: flex; justify-content: space-between; align-items: center">
                    <a href="#/" class="logo">Elite<span>Quiz</span></a>
                    <div class="nav-links">
                        ${this.authLinks(user)}
                    </div>
                </div>
            </nav>
        `;
    },

    landing(stats = null) {
        return `
            <div class="hero">
                <div class="container animate-up">
                    <span class="text-primary" style="font-weight: 700; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 0.2em">Intelligence Reimagined</span>
                    <h1>Unlock Your <span class="text-gradient">Potential</span> With Elite Assessments</h1>
                    <p class="text-muted" style="font-size: 1.25rem; max-width: 700px; margin: 2rem auto">Professional certifications, skill validation, and academic excellence platform.</p>
                    <div style="display: flex; gap: 1.5rem; justify-content: center; margin-top: 3rem">
                        <a href="#/exams" class="btn btn-primary" style="padding: 1.25rem 3rem; font-size: 1.1rem">Browse Exams</a>
                        <a href="#/register" class="btn btn-secondary" style="padding: 1.25rem 3rem; font-size: 1.1rem">Sign Up</a>
                    </div>
                </div>
            </div>
        `;
    },

    login() {
        return `
            <div class="container section-padding animate-up">
                <div class="feature-card" style="max-width: 450px; margin: 0 auto; padding: 4rem">
                        <div style="text-align: center; margin-bottom: 3rem;">
                            <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem">Welcome Back</h2>
                            <p class="text-muted" style="font-size: 1.1rem;">Login to your account to continue</p>
                        </div>
                    <form onsubmit="App.handleLogin(event)" style="text-align: left">
                        <div style="margin-bottom: 1.5rem">
                            <label style="display: block; margin-bottom: 0.75rem; font-weight: 600; color: var(--text-muted)">Email Address</label>
                            <input type="email" name="email" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--surface); border: 2px solid var(--surface-border); color: var(--text)" required>
                        </div>
                        <div style="margin-bottom: 2rem">
                            <label style="display: block; margin-bottom: 0.75rem; font-weight: 600; color: var(--text-muted)">Password</label>
                            <input type="password" name="password" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--surface); border: 2px solid var(--surface-border); color: var(--text)" required>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1.25rem; font-size: 1.1rem; font-weight: 600; margin-top: 1rem">Login</button>
                    </form>
                    <div style="margin-top: 2.5rem; text-align: center; border-top: 1px solid var(--surface-border); padding-top: 2rem;">
                        <p class="text-muted" style="margin: 0">Don't have an account? <a href="#/register" style="color: var(--primary); font-weight: 600; text-decoration: none;">Sign up</a></p>
                    </div>
                </div>
            </div>
        `;
    },

    register() {
        return `
            <div class="container section-padding animate-up">
                <div class="feature-card" style="max-width: 450px; margin: 0 auto; padding: 4rem">
                    <div style="text-align: center; margin-bottom: 3rem;">
                        <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem">Create Account</h2>
                        <p class="text-muted" style="font-size: 1.1rem;">Sign up to get started</p>
                    </div>
                    <form onsubmit="App.handleRegister(event)" style="text-align: left">
                         <div style="margin-bottom: 1.5rem">
                            <label style="display: block; margin-bottom: 0.75rem; font-weight: 600; color: var(--text-muted)">Full Name</label>
                            <input type="text" name="name" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--surface); border: 2px solid var(--surface-border); color: var(--text)" required>
                        </div>
                        <div style="margin-bottom: 1.5rem">
                            <label style="display: block; margin-bottom: 0.75rem; font-weight: 600; color: var(--text-muted)">Email Address</label>
                            <input type="email" name="email" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--surface); border: 2px solid var(--surface-border); color: var(--text)" required>
                        </div>
                        <div style="margin-bottom: 1.5rem">
                            <label style="display: block; margin-bottom: 0.75rem; font-weight: 600; color: var(--text-muted)">Password</label>
                            <input type="password" name="password" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--surface); border: 2px solid var(--surface-border); color: var(--text)" required>
                        </div>
                        <div style="margin-bottom: 2.5rem">
                            <label style="display: block; margin-bottom: 0.75rem; font-weight: 600; color: var(--text-muted)">Select Your Role</label>
                            <select name="role" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--surface); border: 2px solid var(--surface-border); color: var(--text)">
                                <option value="student">Student</option>
                                <option value="admin">Administrator</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1.25rem; font-size: 1.1rem; font-weight: 600; margin-top: 1rem">Sign Up</button>
                    </form>
                    <div style="margin-top: 2.5rem; text-align: center; border-top: 1px solid var(--surface-border); padding-top: 2rem;">
                        <p class="text-muted" style="margin: 0">Already have an account? <a href="#/login" style="color: var(--primary); font-weight: 600; text-decoration: none;">Login instead</a></p>
                    </div>
                </div>
            </div>
        `;
    },

    adminHome(data) {
        const user = Auth.getUser() || { name: 'Administrator', role: 'admin' };
        return `
            <div class="container section-padding animate-up" style="text-align: left">
                <header style="margin-bottom: 4rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--surface-border); padding-bottom: 2rem;">
                    <div>
                        <h1 style="margin: 0; font-size: 2.5rem; font-weight: 800;">Welcome back, ${user.name}</h1>
                        <p class="text-muted" style="margin-top: 0.5rem; font-size: 1.1rem;"><span style="background: var(--primary-glow); color: var(--primary); padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-right: 0.5rem; text-transform: uppercase;">Admin</span> Platform Overview & Intelligence</p>
                    </div>
                </header>

                <div class="stats-grid" style="margin-bottom: 5rem; gap: 2rem;">
                    <div class="feature-card" style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: center;">
                        <div class="text-muted" style="font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase;">Total Exams</div>
                        <div style="font-size: 3.5rem; font-weight: 800; color: var(--primary); line-height: 1;">${data.totalExams || 0}</div>
                    </div>
                    <div class="feature-card" style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: center;">
                        <div class="text-muted" style="font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase;">Total Students</div>
                        <div style="font-size: 3.5rem; font-weight: 800; line-height: 1;">${data.totalStudents || 0}</div>
                    </div>
                    <div class="feature-card" style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: center;">
                        <div class="text-muted" style="font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase;">Total Submissions</div>
                        <div style="font-size: 3rem; font-weight: 800; color: var(--success)">${data.totalSubmissions || 0}</div>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 4rem">
                    <div>
                        <h2 style="margin-bottom: 2rem">Recent Performance Insights</h2>
                        <div class="feature-card" style="padding: 2.5rem">
                            <canvas id="main-performance-chart" style="max-height: 400px"></canvas>
                        </div>
                    </div>
                    <div>
                        <h2 style="margin-bottom: 2rem">Quick Actions</h2>
                        <div style="display: flex; flex-direction: column; gap: 1.5rem">
                            <button class="btn btn-primary" onclick="window.location.hash='#/admin/exams/new'" style="width: 100%; padding: 1.5rem">
                                <i class="fas fa-plus" style="margin-right: 1rem"></i> Create Certification
                            </button>
                            <button class="btn btn-outline" onclick="window.location.hash='#/admin/students'" style="width: 100%; padding: 1.5rem">
                                <i class="fas fa-users" style="margin-right: 1rem"></i> Manage Students
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    adminExams(exams) {
        return `
            <div class="container section-padding animate-up" style="text-align: left">
                <header style="margin-bottom: 4rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--surface-border); padding-bottom: 2rem;">
                    <div>
                        <h1 style="margin: 0; font-size: 2.5rem; font-weight: 800;">Exam Management</h1>
                        <p class="text-muted" style="margin-top: 0.5rem; font-size: 1.1rem;">Create, edit, and manage all active certifications.</p>
                    </div>
                    <button class="btn btn-primary" onclick="window.location.hash='#/admin/exams/new'"><i class="fas fa-plus"></i> Create Exam</button>
                </header>

                <div class="feature-card" style="padding: 0; overflow: hidden">
                    <table style="width: 100%; border-collapse: collapse">
                        <thead>
                            <tr style="background: var(--surface); color: var(--text-muted); font-size: 0.75rem; font-weight: 800; text-transform: uppercase">
                                <th style="padding: 2rem">Title</th>
                                <th style="padding: 2rem">Questions</th>
                                <th style="padding: 2rem">Duration</th>
                                <th style="padding: 2rem">Status</th>
                                <th style="padding: 2rem">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${exams.map(e => `
                                <tr style="border-bottom: 1px solid var(--surface-border)">
                                    <td style="padding: 2rem; font-weight: 700">${e.title}</td>
                                    <td style="padding: 2rem">${e.question_count || 0} Points</td>
                                    <td style="padding: 2rem">${e.duration} Min</td>
                                    <td style="padding: 2rem">
                                        <span style="padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.7rem; font-weight: 800; background: ${e.is_published ? 'var(--success-glow)' : 'var(--error-glow)'}; color: ${e.is_published ? 'var(--success)' : 'var(--error)'}">
                                            ${e.is_published ? 'PUBLISHED' : 'DRAFT'}
                                        </span>
                                    </td>
                                    <td style="padding: 2rem">
                                        <div style="display: flex; gap: 1rem">
                                            <button class="btn btn-primary btn-sm" onclick="App.toggleExamPublish(${e.id}, ${e.is_published})" style="background: ${e.is_published ? 'var(--error)' : 'var(--success)'}">
                                                ${e.is_published ? 'Unpublish' : 'Publish'}
                                            </button>
                                            <button class="btn btn-outline btn-sm" onclick="App.previewExam(${e.id})">Preview</button>
                                            <button class="btn btn-secondary btn-sm" onclick="App.deleteExam(${e.id})"><i class="fas fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    adminStudents(students) {
        return `
            <div class="container section-padding animate-up" style="text-align: left">
                <header style="margin-bottom: 4rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--surface-border); padding-bottom: 2rem;">
                    <div>
                        <h1 style="margin: 0; font-size: 2.5rem; font-weight: 800;">Student Directory</h1>
                        <p class="text-muted" style="margin-top: 0.5rem; font-size: 1.1rem;">View and manage registered candidates.</p>
                    </div>
                    <div style="display: flex; gap: 1rem">
                         <input type="text" id="student-search-input" placeholder="Search by name or email..." style="width: 300px; padding: 1.25rem 2rem; border-radius: 1rem; background: var(--surface); border: 2px solid var(--surface-border); color: var(--text)" oninput="App.handleStudentSearch(this.value)">
                    </div>
                </header>

                <div class="feature-card" style="padding: 0; overflow: hidden">
                    <table style="width: 100%; border-collapse: collapse">
                        <thead>
                            <tr style="background: var(--surface); color: var(--text-muted); font-size: 0.75rem; font-weight: 800; text-transform: uppercase">
                                <th style="padding: 2rem">Candidate</th>
                                <th style="padding: 2rem">Email</th>
                                <th style="padding: 2rem">Enrollment Date</th>
                                <th style="padding: 2rem">Exams Taken</th>
                                <th style="padding: 2rem">Action Terminal</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${students.map(s => `
                                <tr style="border-bottom: 1px solid var(--surface-border)">
                                    <td style="padding: 2rem; font-weight: 700">${s.name}</td>
                                    <td style="padding: 2rem" class="text-muted">${s.email}</td>
                                    <td style="padding: 2rem" class="text-muted">${new Date(s.created_at).toLocaleDateString()}</td>
                                    <td style="padding: 2rem">${s.total_exams || 0}</td>
                                    <td style="padding: 2rem">
                                        <button class="btn btn-outline btn-sm" onclick="App.showStudentDetail(${s.id})">View Analytics</button>
                                        <button class="btn btn-secondary btn-sm" onclick="App.grantRetake(${s.id}, '${s.name.replace(/'/g, "\\'")}')" title="Grant Protocol Retake"><i class="fas fa-redo"></i></button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    adminResults(exams, selectedExamId = '', analytics = null) {
        return `
            <div class="container section-padding animate-up" style="text-align: left">
                <header style="margin-bottom: 4rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--surface-border); padding-bottom: 2rem;">
                    <div>
                        <h1 style="margin: 0; font-size: 2.5rem; font-weight: 800;">Performance Analytics</h1>
                        <p class="text-muted" style="margin-top: 0.5rem; font-size: 1.1rem;">Analyze academic results and score distributions.</p>
                    </div>
                    <div style="display: flex; gap: 1.5rem">
                         <select id="analytics-exam-selector" class="btn btn-secondary" style="background: var(--surface); color: var(--text); border: 1px solid var(--surface-border); font-weight: 600;" onchange="App.loadAdminAnalytics(this.value)">
                            <option value="">Select an Exam</option>
                            ${exams.map(e => `<option value="${e.id}" ${selectedExamId == e.id ? 'selected' : ''}>${e.title}</option>`).join('')}
                         </select>
                         <button class="btn btn-primary" onclick="App.exportResultsToExcel(${selectedExamId})"><i class="fas fa-file-excel"></i> Export Analytics</button>
                    </div>
                </header>

                ${analytics ? this.adminExamAnalytics(analytics, exams.find(e => e.id == selectedExamId)) : `
                <div style="padding: 8rem 0; text-align: center; border: 2px dashed var(--surface-border); border-radius: 2rem">
                    <i class="fas fa-chart-line" style="font-size: 4rem; opacity: 0.1; margin-bottom: 2rem"></i>
                    <h3 class="text-muted">Select an assessment hub above to view detailed precision analytics.</h3>
                </div>
                `}
            </div>
        `;
    },

    adminExamAnalytics(data, exam) {
        const { stats, leaderboard, distribution } = data;
        let distLabels = ["0-20%", "21-40%", "41-60%", "61-80%", "81-100%"];
        let distData = [0, 0, 0, 0, 0];
        if (distribution && Array.isArray(distribution)) {
             distribution.forEach(d => {
                 if (d.range === '0-20%') distData[0] = d.count;
                 if (d.range === '21-40%') distData[1] = d.count;
                 if (d.range === '41-60%') distData[2] = d.count;
                 if (d.range === '61-80%') distData[3] = d.count;
                 if (d.range === '81-100%') distData[4] = d.count;
             });
        }
        window.currentDistData = distData;
        window.currentDistLabels = distLabels;

        return `
            <div class="animate-up" id="admin-export-area">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem">
                    <h2 style="margin: 0">${exam.title} Insights</h2>
                    <div style="display: flex; gap: 1rem" data-html2canvas-ignore>
                        <button class="btn btn-secondary btn-sm" onclick="App.exportAdminPDF('${exam.title}')">
                            <i class="fas fa-file-pdf"></i> Export PDF
                        </button>
                    </div>
                </div>

                <div class="stats-grid" style="margin-bottom: 4rem">
                    <div class="feature-card" style="padding: 2.5rem">
                        <div class="text-muted" style="font-size: 0.75rem; font-weight: 700; margin-bottom: 0.5rem">MEAN PRECISION</div>
                        <div style="font-size: 3rem; font-weight: 800; color: var(--primary)">${stats.average_score?.toFixed(1) || 0}%</div>
                    </div>
                    <div class="feature-card" style="padding: 2.5rem">
                        <div class="text-muted" style="font-size: 0.75rem; font-weight: 700; margin-bottom: 0.5rem">SYSTEM ATTEMPTS</div>
                        <div style="font-size: 3rem; font-weight: 800">${stats.total_attempts || 0}</div>
                    </div>
                    <div class="feature-card" style="padding: 2.5rem">
                        <div class="text-muted" style="font-size: 0.75rem; font-weight: 700; margin-bottom: 0.5rem">INTEGRITY PASS RATE</div>
                        <div style="font-size: 3rem; font-weight: 800; color: var(--success)">
                            ${((stats.pass_count / (stats.total_attempts || 1)) * 100).toFixed(1)}%
                        </div>
                    </div>
                </div>

                <div class="stats-grid" style="grid-template-columns: 2fr 1fr; gap: 4rem; margin-bottom: 5rem">
                    <div class="feature-card" style="padding: 2.5rem">
                        <h3 style="margin-bottom: 2rem">Score Distribution Vector</h3>
                        <canvas id="score-distribution-chart" style="max-height: 250px"></canvas>
                    </div>
                    <div class="feature-card" style="padding: 0; overflow: hidden">
                         <h3 style="padding: 2rem; border-bottom: 1px solid var(--surface-border)">Top Performers</h3>
                         ${leaderboard && leaderboard.length > 0 ? leaderboard.slice(0, 5).map((l, i) => `
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid var(--surface-border)">
                                <div style="font-weight: 700">${l.user_name}</div>
                                <div class="badge badge-live">${l.score}%</div>
                            </div>
                         `).join('') : '<p style="padding: 2rem; text-align: center; opacity: 0.5">No data available.</p>'}
                    </div>
                </div>
            </div>
        `;
    },

    examForm(exam = null) {
        return `
            <div class="container section-padding animate-up" style="max-width: 800px; text-align: left">
                <div class="feature-card" style="padding: 4rem">
                    <h2 style="margin-bottom: 4rem">${exam ? 'Reconfigure' : 'Create'} certification Model</h2>
                    <form onsubmit="App.handleExamSubmit(event, ${exam ? exam.id : 'null'})">
                        <div style="margin-bottom: 2rem">
                            <label style="display: block; margin-bottom: 0.75rem; font-weight: 700">Exam Title</label>
                            <input type="text" name="title" value="${exam ? exam.title : ''}" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--background); border: 2px solid var(--surface-border); color: var(--text)" required>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem">
                            <div>
                                <label style="display: block; margin-bottom: 0.75rem; font-weight: 700">Duration (Minutes)</label>
                                <input type="number" name="duration" value="${exam ? exam.duration : '60'}" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--background); border: 2px solid var(--surface-border); color: var(--text)" required>
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.75rem; font-weight: 700">Passing Score (%)</label>
                                <input type="number" name="passing_score" value="${exam ? exam.passing_score : '40'}" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--background); border: 2px solid var(--surface-border); color: var(--text)" required>
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem">
                            <div>
                                <label style="display: block; margin-bottom: 0.75rem; font-weight: 700">Scheduled Start</label>
                                <input type="datetime-local" name="start_time" value="${exam && exam.start_time ? new Date(exam.start_time).toISOString().slice(0, 16) : ''}" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--background); border: 2px solid var(--surface-border); color: var(--text)">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.75rem; font-weight: 700">Scheduled End</label>
                                <input type="datetime-local" name="end_time" value="${exam && exam.end_time ? new Date(exam.end_time).toISOString().slice(0, 16) : ''}" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--background); border: 2px solid var(--surface-border); color: var(--text)">
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 4rem">
                             <div>
                                <label style="display: block; margin-bottom: 0.75rem; font-weight: 700">Initial Visibility</label>
                                <select name="is_published" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--background); border: 2px solid var(--surface-border); color: var(--text)">
                                    <option value="0" ${exam && !exam.is_published ? 'selected' : ''}>DRAFT (Hidden)</option>
                                    <option value="1" ${exam && exam.is_published ? 'selected' : ''}>PUBLISHED (Visible)</option>
                                </select>
                            </div>
                        </div>
                        <div style="display: flex; gap: 1.5rem">
                            <button type="button" class="btn btn-secondary" style="flex: 1" onclick="window.history.back()">Back</button>
                            <button type="submit" class="btn btn-primary" style="flex: 2">Commit Configuration</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    },

    examPreview(data) {
        const { exam, questions } = data;
        return `
            <div class="container section-padding animate-up" style="text-align: left">
                <header style="margin-bottom: 4rem; display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid var(--surface-border); padding-bottom: 2rem">
                    <div>
                         <span class="text-primary" style="font-weight: 800; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em">Configuration Management</span>
                        <h1 style="margin: 0.5rem 0">${exam.title}</h1>
                        <p class="text-muted">Total Integrity Points: <strong>${exam.total_marks || 0}</strong> | Duration: <strong>${exam.duration} Min</strong></p>
                    </div>
                </header>

                <div style="display: grid; grid-template-columns: 1fr 350px; gap: 4rem; align-items: start">
                    <div>
                        <div style="display: flex; gap: 2rem; margin-bottom: 3rem; border-bottom: 1px solid var(--surface-border)">
                            <button class="nav-link active" onclick="App.switchPreviewTab('mcq')" style="padding: 1rem 0; background: transparent; border: none; font-weight: 700; color: var(--text); border-bottom: 2px solid var(--primary)">MCQ Cluster</button>
                            <button class="nav-link" onclick="App.switchPreviewTab('short')" style="padding: 1rem 0; background: transparent; border: none; font-weight: 700; color: var(--text-muted)">Theory Section</button>
                            <button class="nav-link" onclick="App.switchPreviewTab('coding')" style="padding: 1rem 0; background: transparent; border: none; font-weight: 700; color: var(--text-muted)">Algorithm Module</button>
                        </div>

                        <div id="preview-tab-content">
                            ${this.examPreviewSection(exam.id, 'mcq', questions.mcq || [])}
                        </div>
                    </div>

                    <aside>
                        <div class="feature-card" style="padding: 2.5rem; background: var(--surface)">
                             <h3 style="margin-bottom: 2rem"><i class="fas fa-file-import text-primary"></i> Rapid Ingestion</h3>
                             
                             <div style="border: 2px dashed var(--surface-border); padding: 2rem; border-radius: 1.5rem; text-align: center; cursor: pointer" onclick="document.getElementById('excel-input').click()">
                                <i class="fas fa-cloud-upload-alt" style="font-size: 2.5rem; opacity: 0.3; margin-bottom: 1rem"></i>
                                <p style="font-size: 0.8rem; font-weight: 700">Click to Upload Multi-Sheet Excel</p>
                                <input type="file" id="excel-input" style="display: none" accept=".xlsx, .xls" onchange="App.handleExcelImport(event, ${exam.id})">
                             </div>
                        </div>
                    </aside>
                </div>
            </div>
        `;
    },

    examPreviewSection(examId, type, items) {
        return `
            <div class="animate-up" style="display: flex; flex-direction: column; gap: 2rem">
                <div style="display: flex; justify-content: space-between; align-items: center">
                    <h3 style="text-transform: capitalize">${type} Questions (${items.length})</h3>
                    <button class="btn btn-primary btn-sm" onclick="App.showAddQuestion(${examId}, '${type}')"><i class="fas fa-plus"></i> Add Point</button>
                </div>

                ${items.length === 0 ? `
                    <div style="padding: 4rem; text-align: center; border: 2px dashed var(--surface-border); border-radius: 2rem">
                        <p class="text-muted">No questions found in this module cluster.</p>
                    </div>
                ` : items.map(q => `
                    <div class="feature-card" style="padding: 2rem; display: flex; justify-content: space-between; align-items: center">
                        <div style="flex: 1">
                            <h4 style="margin-bottom: 0.5rem; line-height: 1.5">${q.question_text}</h4>
                            <div style="display: flex; gap: 1.5rem; font-size: 0.75rem; color: var(--text-muted)">
                                <span><i class="fas fa-medal"></i> Weight: ${q.marks}</span>
                                <span class="text-success"><i class="fas fa-check-circle"></i> Key: <strong>${q.correct_answer || '--'}</strong></span>
                            </div>
                        </div>
                        <div style="display: flex; gap: 1rem; margin-left: 2rem">
                            <button class="btn btn-outline btn-sm" onclick="App.handleEditClick(${q.id}, '${type}')">Modify</button>
                            <button class="btn btn-secondary btn-sm" onclick="App.deleteQuestion(${q.id}, ${examId})"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    questionEditForm(q) {
        return `
            <div class="container section-padding animate-up" style="max-width: 800px; text-align: left">
                <div class="feature-card" style="padding: 4rem">
                    <h2 style="margin-bottom: 3rem">Intelligence Point Modeling</h2>
                    <form onsubmit="App.handleQuestionUpdate(event, ${q.id}, ${q.exam_id})">
                        <div style="margin-bottom: 2rem">
                            <label style="display: block; margin-bottom: 0.75rem; font-weight: 700">Classification</label>
                            <select name="type" style="width: 100%; padding: 1.25rem; border-radius: 1rem; background: var(--background); border: 2px solid var(--surface-border); color: var(--text)" onchange="App.handleTypeChange(this.value, ${q.id}, ${q.exam_id})">
                                <option value="mcq" ${q.type === 'mcq' ? 'selected' : ''}>Multiple Choice</option>
                                <option value="short" ${q.type === 'short' ? 'selected' : ''}>Theory Response</option>
                                <option value="coding" ${q.type === 'coding' ? 'selected' : ''}>Algorithmic Logic</option>
                            </select>
                        </div>
                        
                        <div style="margin-bottom: 2rem">
                            <label style="display: block; margin-bottom: 0.75rem; font-weight: 700">Question Content</label>
                            <textarea id="edit-q-text" name="question_text" style="width: 100%; height: 120px; padding: 1.5rem; border-radius: 1rem; background: var(--background); border: 2px solid var(--surface-border); color: var(--text)" required>${q.question_text}</textarea>
                        </div>

                        ${q.type === 'mcq' ? `
                            <div style="margin-bottom: 2rem">
                                <label style="display: block; margin-bottom: 1.5rem; font-weight: 700">Response Options</label>
                                <div id="options-list" style="display: grid; gap: 1rem">
                                    ${(Array.isArray(q.options) ? q.options : (function(o){try{return typeof o==='string'?JSON.parse(o):[]}catch(e){return typeof o==='string'?o.split(',').map(s=>s.trim()):[]}})(q.options || '[]')).map((opt, i) => `
                                        <div class="option-row" style="display: flex; align-items: center; gap: 1rem">
                                            <input type="radio" name="correct-option" value="${i}" ${q.correct_answer === opt ? 'checked' : ''} style="width: 20px; height: 20px; cursor: pointer">
                                            <input type="text" class="mcq-option-input" value="${opt}" style="flex: 1; padding: 1rem; border-radius: 1rem; background: var(--background); border: 1px solid var(--surface-border); color: var(--text)" required>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : `
                         <div style="margin-bottom: 2rem">
                                <label style="display: block; margin-bottom: 0.75rem; font-weight: 700">Evaluation Key (Model Answer)</label>
                                <textarea id="edit-q-correct" name="correct_answer" style="width: 100%; height: 80px; padding: 1.5rem; border-radius: 1rem; background: var(--background); border: 2px solid var(--surface-border); color: var(--text)">${q.correct_answer || ''}</textarea>
                            </div>
                        `}

                        <div style="display: flex; gap: 1.5rem">
                            <button type="button" class="btn btn-secondary" style="flex: 1" onclick="App.previewExam(${q.exam_id})">Discard</button>
                            <button type="submit" class="btn btn-primary" style="flex: 2">Commit Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    },

    confirmationModal(title, message, btnText, btnFn) {
        return `
            <div id="custom-modal-overlay" style="position: fixed; inset: 0; background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 10000">
                <div class="feature-card animate-up" style="max-width: 450px; padding: 4rem; text-align: center">
                    <h3 style="margin-bottom: 1.5rem">${title}</h3>
                    <p class="text-muted" style="margin-bottom: 3rem; line-height: 1.6">${message}</p>
                    <div style="display: flex; gap: 1rem">
                        <button class="btn btn-secondary" style="flex: 1" onclick="document.getElementById('custom-modal-overlay').remove()">Cancel</button>
                        <button class="btn btn-primary" style="flex: 1" onclick="${btnFn}">${btnText}</button>
                    </div>
                </div>
            </div>
        `;
    },

    authLinks(user) {
        if (!user) return `
            <a href="#/login" class="btn-nav">Login</a>
            <a href="#/register" class="btn btn-primary">Sign Up</a>
        `;

        if (user.role === 'admin') {
            return `
                <div style="display: flex; gap: 2rem; align-items: center">
                    <nav style="display: flex; gap: 1.5rem; align-items: center;">
                        <a href="#/admin/home" class="btn-nav">Dashboard</a>
                        <a href="#/admin/exams" class="btn-nav">Manage Exams</a>
                        <a href="#/admin/students" class="btn-nav">Students</a>
                        <a href="#/admin/results" class="btn-nav">Analytics</a>
                    </nav>
                    <div style="width: 1px; height: 30px; background: var(--surface-border); margin: 0 0.5rem"></div>
                    <div class="user-profile-menu" style="display: flex; align-items: center; gap: 1rem;">
                        <div style="text-align: right; display: flex; flex-direction: column; line-height: 1.2">
                            <span style="font-weight: 800; font-size: 1rem; color: #ffffff; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">${user.name}</span>
                            <span class="text-primary" style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Administrator</span>
                        </div>
                        <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--primary-gradient); ${user.profile_pic ? `background-image: url('${user.profile_pic}'); background-size: cover; background-position: center;` : ''} display: flex; align-items: center; justify-content: center; font-weight: bold; color: white;">
                            ${user.profile_pic ? '' : (user.name ? user.name.charAt(0).toUpperCase() : 'A')}
                        </div>
                        <button onclick="Auth.logout()" class="btn btn-secondary btn-sm" style="margin-left: 0.5rem; padding: 0.6rem 1rem; border-color: var(--surface-border)">
                            Logout <i class="fas fa-sign-out-alt" style="margin-left: 0.3rem;"></i>
                        </button>
                    </div>
                </div>
            `;
        }

        return `
            <div style="display: flex; gap: 2rem; align-items: center">
                <nav style="display: flex; gap: 1.5rem; align-items: center;">
                    <a href="#/student/dashboard" class="btn-nav">Dashboard</a>
                    <a href="#/exams" class="btn-nav">Exams</a>
                    <a href="#/question-bank" class="btn-nav">Question Bank</a>
                    <a href="#/leaderboard" class="btn-nav">Leaderboard</a>
                    <a href="#/history" class="btn-nav">History</a>
                </nav>
                <div style="width: 1px; height: 30px; background: var(--surface-border); margin: 0 0.5rem"></div>
                <div class="user-profile-menu" style="display: flex; align-items: center; gap: 1rem;">
                    <div style="text-align: right; display: flex; flex-direction: column; line-height: 1.2">
                        <span style="font-weight: 800; font-size: 1rem; color: #ffffff; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">${user.name}</span>
                        <span style="color: #94a3b8; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Student</span>
                    </div>
                    <a href="#/profile" style="text-decoration: none;">
                        <div style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--surface-border); ${user.profile_pic ? `background-image: url('${user.profile_pic}'); background-size: cover; background-position: center;` : ''} display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--text); overflow: hidden; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                            ${user.profile_pic ? '' : (user.name ? user.name.charAt(0).toUpperCase() : 'S')}
                        </div>
                    </a>
                    <button onclick="Auth.logout()" class="btn btn-secondary btn-sm" style="margin-left: 0.5rem; padding: 0.6rem 1rem; border-color: var(--surface-border)">
                        Logout <i class="fas fa-sign-out-alt" style="margin-left: 0.3rem;"></i>
                    </button>
                </div>
            </div>
        `;
    },

    examsPage(exams) {
        const isAdmin = Auth.getUser()?.role === 'admin';
        return `
            <div class="container section-padding animate-up" style="text-align: left">
                <header style="margin-bottom: 5rem">
                    <h1 style="margin: 0; font-size: 2.5rem; font-weight: 800;">Certification <span style="font-weight: 300; opacity: 0.5">Catalog</span></h1>
                </header>

                <div class="stats-grid" style="grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))">
                    ${exams.map(e => `
                        <div class="feature-card" style="padding: 3rem">
                             <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem">
                                 <h2 style="margin: 0; font-size: 1.4rem;">${e.title}</h2>
                                 <span class="badge" style="background: ${e.is_published ? 'var(--success-glow)' : 'var(--error-glow)'}; color: ${e.is_published ? 'var(--success)' : 'var(--error)'}; font-size: 0.7rem; padding: 0.4rem 1rem;">${e.is_published ? 'PUBLISHED' : 'DRAFT'}</span>
                             </div>
                             <div style="margin-bottom: 2rem; color: var(--text-muted)"><i class="far fa-clock" style="margin-right: 0.5rem"></i> Duration: ${e.duration} MIN</div>
                             ${isAdmin 
                                 ? `<button class="btn btn-primary" style="width: 100%" onclick="window.location.hash='#/admin/exams/edit/${e.id}'">Edit Exam</button>`
                                 : (e.attempt_id 
                                     ? `<button class="btn btn-secondary" style="width: 100%; border-color: var(--success); color: var(--success); opacity: 0.8; pointer-events: none;">Already Completed <i class="fas fa-check" style="margin-left:0.5rem"></i></button>`
                                     : (e.start_time && new Date(e.start_time) > new Date()
                                         ? `<div class="btn btn-secondary realtime-timer" style="width: 100%; pointer-events: none; border-color: var(--surface-border); display: flex; justify-content: center; align-items: center;" data-until="${e.start_time}">--:--:--</div>`
                                         : `<button class="btn btn-primary" style="width: 100%" onclick="App.startExam(${e.id})">Take Exam</button>`)
                                 )
                             }
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    historyPage(attempts) {
        return `
            <div class="container animate-up">
                <header style="margin-bottom: 5rem">
                    <h1>Performance <span style="font-weight: 300; opacity: 0.6">Archives</span></h1>
                </header>

                <div class="feature-card" style="padding: 0; overflow: hidden">
                    <table style="width: 100%; border-collapse: collapse; text-align: left">
                        <thead>
                            <tr style="background: rgba(255,255,255,0.02); text-transform: uppercase; font-size: 0.7rem;">
                                <th style="padding: 1.5rem 2rem">Exam</th>
                                <th style="padding: 1.5rem 2rem">Timestamp</th>
                                <th style="padding: 1.5rem 2rem">Score</th>
                                <th style="padding: 1.5rem 2rem">Analysis</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${attempts.map(a => `
                                <tr style="border-bottom: 1px solid var(--surface-border)">
                                    <td style="padding: 2rem">${a.exam_title}</td>
                                    <td style="padding: 2rem">${new Date(a.submit_time).toLocaleString()}</td>
                                    <td style="padding: 2rem; font-weight: 800">${a.score}%</td>
                                    <td style="padding: 2rem">
                                        <button class="btn btn-outline" onclick="App.showResults(${a.attempt_id || a.id})">View Audit</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    profileView(user, stats = null) {
        const avatarUrl = user.profile_pic || '';
        const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';

        return `
            <div class="container section-padding animate-up" style="max-width: 900px; text-align: left">
                <header style="margin-bottom: 4rem">
                    <h1 style="margin: 0; font-size: 2.5rem; font-weight: 800;">User <span style="font-weight: 300; opacity: 0.5">Profile</span></h1>
                </header>

                <div class="feature-card" style="padding: 4rem; display: flex; gap: 4rem; align-items: flex-start">
                    <div style="position: relative; width: 150px; height: 150px; flex-shrink: 0;">
                        <div id="profile-avatar-display" style="width: 100%; height: 100%; border-radius: 50%; background-color: var(--surface-border); ${avatarUrl ? `background-image: url('${avatarUrl}'); background-size: cover; background-position: center;` : ''} display: flex; align-items: center; justify-content: center; font-size: 4rem; font-weight: 800; color: var(--text-muted); overflow: hidden; border: 4px solid var(--surface-border); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                            ${avatarUrl ? '' : initial}
                        </div>
                        
                        <label for="profile-pic-upload" style="position: absolute; bottom: 0; right: 0; background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 10px rgba(99, 102, 241, 0.4); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" title="Change Avatar">
                            <i class="fas fa-camera"></i>
                        </label>
                        <input type="file" id="profile-pic-upload" accept="image/png, image/jpeg, image/webp" style="display: none" onchange="App.handleAvatarUpload(event)">
                        
                        ${avatarUrl ? `
                        <button onclick="App.handleAvatarDelete()" style="position: absolute; bottom: 0; left: 0; background: var(--error); color: white; width: 35px; height: 35px; border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 10px rgba(239, 68, 68, 0.4); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" title="Remove Avatar">
                            <i class="fas fa-trash-alt" style="font-size: 0.8rem"></i>
                        </button>
                        ` : ''}
                    </div>
                    <div style="flex: 1">
                        <div style="margin-bottom: 2rem">
                            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">Full Name</label>
                            <div style="font-size: 1.5rem; font-weight: 800">${user.name}</div>
                        </div>
                        <div style="margin-bottom: 2rem">
                            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">Email Address</label>
                            <div style="font-size: 1.25rem; color: var(--primary); cursor: pointer;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">${user.email}</div>
                        </div>
                        <div>
                            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">System Role</label>
                            <div style="display: inline-block; padding: 0.5rem 1rem; border-radius: 50px; background: rgba(255,255,255,0.05); font-weight: 700; font-size: 0.9rem; letter-spacing: 0.05em; text-transform: uppercase;">${user.role}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    examTaker(exam, questions) {
        return `
            <div class="exam-layout">
                <nav class="exam-header" style="background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(20px)">
                    <div class="container" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem">
                        <div>
                            <h2 style="margin: 0; font-size: 1.25rem">${exam.title}</h2>
                        </div>
                        <div style="display: flex; gap: 3rem; align-items: center">
                            <div id="timer-display" style="font-size: 2rem; font-weight: 800; font-family: monospace; color: var(--primary)">--:--</div>
                            <button class="btn btn-primary" onclick="App.confirmSubmit()">Submit Test</button>
                        </div>
                    </div>
                </nav>

                <div class="container exam-content" style="padding-top: 120px; display: grid; grid-template-columns: 1fr 350px; gap: 4rem">
                    <div id="current-question-container"></div>
                    <aside class="exam-sidebar">
                        <div class="feature-card" style="padding: 2rem; background: var(--surface)">
                            <h3 style="margin-bottom: 2rem">Navigator</h3>
                            <div class="question-palette" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem">
                                ${questions.map((q, i) => `
                                    <button class="palette-btn" id="palette-${i}" onclick="App.jumpToQuestion(${i})" style="aspect-ratio: 1; border-radius: 12px; font-weight: 700; border: 2px solid var(--surface-border); background: transparent; color: var(--text)">
                                        ${i + 1}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        `;
    },

    questionTemplate(q, index, currentAnswer) {
        return `
            <div class="animate-up">
                <h3>Question #${index + 1}</h3>
                <div class="feature-card" style="padding: 4rem; text-align: left; margin-top: 2rem">
                    <h2 style="margin-bottom: 3rem">${q.question_text}</h2>
                    ${q.type === 'mcq' ? `
                        <div style="display: grid; gap: 1.5rem">
                            ${(Array.isArray(q.options) ? q.options : JSON.parse(q.options || '[]')).map((opt, i) => `
                                <label style="display: flex; align-items: center; gap: 1.5rem; padding: 1.5rem; border-radius: 1.25rem; background: var(--background); border: 2px solid ${currentAnswer === opt ? 'var(--primary)' : 'var(--surface-border)'}; cursor: pointer">
                                    <input type="radio" name="answer" value="${opt}" ${currentAnswer === opt ? 'checked' : ''} onchange="App.handleAnswerChange(${q.id}, this.value)">
                                    <span>${opt}</span>
                                </label>
                            `).join('')}
                        </div>
                    ` : `
                        <textarea style="width: 100%; height: 200px; padding: 2rem; border-radius: 1.5rem; background: var(--background); border: 2px solid var(--surface-border); color: white;" oninput="App.handleAnswerChange(${q.id}, this.value)">${currentAnswer || ''}</textarea>
                    `}
                </div>

                <div style="display: flex; justify-content: space-between; margin-top: 4rem">
                    <button id="prev-btn" class="btn btn-secondary" onclick="App.prevQuestion()">Previous</button>
                    <button id="next-btn" class="btn btn-primary" onclick="App.nextQuestion()">Next</button>
                </div>
            </div>
        `;
    },

    resultSummary(data) {
        const { score, total_marks, exam_title, status, percentage, correct_count, total_questions } = data;
        const isPass = status === 'Pass' || percentage >= 40; // Fallback logic if status missing

        return `
            <div class="container section-padding animate-up" style="max-width: 800px; text-align: center">
                <header style="margin-bottom: 4rem">
                    <span class="text-primary" style="font-weight: 800; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.2em">Assessment Finalized</span>
                    <h1 style="margin-top: 1rem">${exam_title}</h1>
                </header>

                <div class="feature-card" style="padding: 5rem 4rem; position: relative; overflow: hidden">
                    <div style="position: absolute; top: -50px; right: -50px; width: 200px; height: 200px; background: ${isPass ? 'var(--success-glow)' : 'var(--error-glow)'}; filter: blur(80px); opacity: 0.4"></div>
                    
                    <div style="font-size: 5rem; font-weight: 900; line-height: 1; margin-bottom: 1rem; color: ${isPass ? 'var(--success)' : 'var(--error)'}">
                        ${percentage}%
                    </div>
                    <div class="badge" style="background: ${isPass ? 'var(--success-glow)' : 'var(--error-glow)'}; color: ${isPass ? 'var(--success)' : 'var(--error)'}; padding: 0.75rem 2rem; font-size: 1rem; margin-bottom: 3rem">
                        ${isPass ? 'CERTIFIED' : 'UNSUCCESSFUL'}
                    </div>

                    <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 4rem">
                        <div style="text-align: center">
                            <div class="text-muted" style="font-size: 0.7rem; font-weight: 800; margin-bottom: 0.5rem">POINTS AWARDED</div>
                            <div style="font-size: 1.5rem; font-weight: 700">${score} / ${total_marks}</div>
                        </div>
                        <div style="text-align: center">
                            <div class="text-muted" style="font-size: 0.7rem; font-weight: 800; margin-bottom: 0.5rem">PRECISION</div>
                            <div style="font-size: 1.5rem; font-weight: 700">${correct_count || 0} / ${total_questions || 0}</div>
                        </div>
                         <div style="text-align: center">
                            <div class="text-muted" style="font-size: 0.7rem; font-weight: 800; margin-bottom: 0.5rem">STATUS</div>
                            <div style="font-size: 1.5rem; font-weight: 700; color: ${isPass ? 'var(--success)' : 'var(--error)'}">${isPass ? 'PASSED' : 'FAILED'}</div>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; justify-content: center">
                        <button class="btn btn-outline" style="padding: 1.25rem 2.5rem" onclick="window.location.hash='#/student/dashboard'">Exit to Dashboard</button>
                        <button class="btn btn-primary" style="padding: 1.25rem 2.5rem" onclick="App.downloadResultPDF(${data.id || data.attempt_id})">
                             <i class="fas fa-file-pdf" style="margin-right: 0.75rem"></i> Download Review Transcript
                        </button>
                    </div>
                </div>

                <p class="text-muted" style="margin-top: 3rem">The official transcript includes a detailed audit of all questions and verified correct answers.</p>
            </div>
        `;
    },

    studentDetail(data) {
        const { user, attempts, stats } = data;
        return `
            <div class="container section-padding animate-up" style="text-align: left">
                <h1>${user.name}</h1>
                <p>${user.email}</p>
                <div class="stats-grid" style="margin: 3rem 0">
                    <div class="feature-card">Avg Score: ${stats.avg_score?.toFixed(1) || 0}%</div>
                    <div class="feature-card">Exams: ${stats.total_exams || 0}</div>
                </div>
                <h3>Recent Attempts</h3>
                <div class="feature-card" style="padding: 0; overflow: hidden; margin-top: 2rem">
                    <table style="width: 100%; border-collapse: collapse">
                        <tbody>
                            ${attempts.map(a => `
                                <tr style="border-bottom: 1px solid var(--surface-border)">
                                    <td style="padding: 1.5rem 2rem">${a.exam_title}</td>
                                    <td style="padding: 1.5rem 2rem">${a.score}%</td>
                                    <td style="padding: 1.5rem 2rem">${new Date(a.submit_time).toLocaleDateString()}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    studentDashboard(data) {
        const user = Auth.getUser() || { name: 'Student' };
        const { summary = {}, upcoming = [], results = [] } = data;
        return `
            <div class="container section-padding animate-up" style="text-align: left">
                <header style="margin-bottom: 4rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--surface-border); padding-bottom: 2rem;">
                    <div>
                        <h1 style="margin: 0; font-size: 2.5rem; font-weight: 800;">Welcome back, ${user.name}</h1>
                        <p class="text-muted" style="margin-top: 0.5rem; font-size: 1.1rem;"><span style="background: var(--surface-border); color: var(--text); padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-right: 0.5rem; text-transform: uppercase;">Student</span> Academic Dashboard</p>
                    </div>
                </header>

                <div class="stats-grid" style="margin-bottom: 5rem; gap: 2rem;">
                    <div class="feature-card" style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: center;">
                        <div class="text-muted" style="font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase;">Upcoming Exams</div>
                        <div style="font-size: 3.5rem; font-weight: 800; color: var(--primary); line-height: 1;">${summary.totalUpcoming || 0}</div>
                    </div>
                    <div class="feature-card" style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: center;">
                        <div class="text-muted" style="font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase;">Completed Exams</div>
                        <div style="font-size: 3.5rem; font-weight: 800; line-height: 1;">${summary.totalCompleted || 0}</div>
                    </div>
                    <div class="feature-card" style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: center;">
                        <div class="text-muted" style="font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase;">Latest Score</div>
                        <div style="font-size: 3.5rem; font-weight: 800; color: var(--success); line-height: 1;">${summary.lastScore !== 'N/A' ? Math.round(summary.lastScore) + '%' : '--'}</div>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; margin-bottom: 5rem;">
                    <div>
                        <h2 style="margin-bottom: 2rem; font-size: 1.8rem;">Upcoming Exams</h2>
                        <div style="display: grid; gap: 1.5rem;">
                            ${upcoming.length > 0 ? upcoming.map(e => `
                                <div class="feature-card" style="padding: 2rem; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid var(--primary);">
                                    <div style="text-align: left;">
                                        <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">${e.title}</h4>
                                        <p class="text-muted" style="font-size: 0.9rem;"><i class="far fa-clock" style="margin-right: 0.5rem;"></i> ${e.duration} Minutes</p>
                                    </div>
                                    ${e.start_time && new Date(e.start_time) > new Date()
                                        ? `<div class="btn btn-secondary realtime-timer" style="pointer-events: none; border-color: var(--surface-border); padding: 0.75rem 2rem; display: flex; justify-content: center; align-items: center; min-width: 140px;" data-until="${e.start_time}">--:--:--</div>`
                                        : `<button class="btn btn-primary" onclick="window.location.hash='#/exam/${e.id}'">Start Exam</button>`
                                    }
                                </div>
                            `).join('') : '<div class="feature-card" style="padding: 3rem; text-align: center; color: var(--text-muted);">No upcoming exams scheduled.</div>'}
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 3rem;">
                        <div>
                            <h2 style="margin-bottom: 2rem; font-size: 1.8rem;">Recent Activity</h2>
                            <div class="feature-card" style="padding: 0; overflow: hidden;">
                                 ${results.length > 0 ? results.map((r, i) => `
                                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; ${i !== results.length - 1 ? 'border-bottom: 1px solid var(--surface-border)' : ''}">
                                        <div style="text-align: left;">
                                            <div style="font-weight: 700; font-size: 1rem;">${r.exam_title}</div>
                                            <div class="text-muted" style="font-size: 0.8rem; margin-top: 0.25rem;">${new Date(r.submit_time).toLocaleDateString()}</div>
                                        </div>
                                        <div style="display: flex; gap: 0.75rem; align-items: center;">
                                            <div style="padding: 0.4rem 1rem; border-radius: 50px; font-weight: 800; font-size: 0.9rem; background: ${r.status === 'Pass' ? 'var(--success-glow)' : 'var(--error-glow)'}; color: ${r.status === 'Pass' ? 'var(--success)' : 'var(--error)'}">${Math.round(r.score)}%</div>
                                        </div>
                                    </div>
                                 `).join('') : '<div style="padding: 3rem; text-align: center; color: var(--text-muted);">No recent activity.</div>'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    studentQuestionBank(results) {
        return `
            <div class="container section-padding animate-up" style="text-align: left">
                <header style="margin-bottom: 5rem">
                    <h1 style="margin: 0; font-size: 2.5rem; font-weight: 800;">Question <span style="font-weight: 300; opacity: 0.5">Bank</span></h1>
                    <p class="text-muted" style="margin-top: 0.5rem; font-size: 1.1rem;">Download full study transcripts with correct answers and explanations for exams you have attempted.</p>
                </header>

                <div class="feature-card" style="padding: 0; overflow: hidden; max-width: 900px;">
                    ${results.length > 0 ? results.map((r, i) => `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 2rem; border-bottom: 1px solid var(--surface-border);">
                        <div style="text-align: left;">
                            <div style="font-weight: 700; font-size: 1.1rem;"><i class="fas fa-file-pdf text-primary" style="margin-right: 0.5rem"></i> ${r.exam_title}</div>
                            <div class="text-muted" style="font-size: 0.9rem; margin-top: 0.5rem;">Attempted: ${new Date(r.submit_time).toLocaleDateString()}</div>
                        </div>
                        <div style="display: flex; gap: 0.75rem;">
                            <button class="btn btn-outline" onclick="App.downloadFullExamPDF(${r.id})" style="padding: 0.75rem 1.25rem;" title="Download Complete Question Bank">
                                <i class="fas fa-book-open" style="margin-right: 0.3rem"></i> Full Bank
                            </button>
                            <button class="btn btn-secondary" onclick="App.downloadResultPDF(${r.id})" style="padding: 0.75rem 1.25rem;" title="Download Personal Analytics">
                                <i class="fas fa-chart-bar" style="margin-right: 0.3rem"></i> Analytics
                            </button>
                        </div>
                    </div>
                    `).join('') : '<div style="padding: 4rem; text-align: center; color: var(--text-muted); font-size: 1.1rem;">No attempted exams available yet. Take an exam to build your Question Bank.</div>'}
                </div>
            </div>
        `;
    },

    studentExams(data) {
        // Simple version for now
        return this.examsPage(data.live || []);
    },

    leaderboard(data) {
        const formatDuration = (sec) => {
            const h = Math.floor(sec / 3600);
            const m = Math.floor((sec % 3600) / 60);
            const s = sec % 60;
            return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
        };

        return `
            <div class="container animate-up">
                <header style="margin-bottom: 4rem">
                    <h1 style="margin:0">Platform <span style="font-weight: 300; opacity: 0.6">Elite Leaderboard</span></h1>
                    <p class="text-muted" style="margin-top: 1rem">Global rankings by precision score and execution speed.</p>
                </header>

                <div class="feature-card" style="padding: 0; overflow: hidden; margin-top: 2rem">
                    <table style="width: 100%; border-collapse: collapse; text-align: left">
                        <thead>
                            <tr style="background: rgba(255,255,255,0.02); text-transform: uppercase; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em">
                                <th style="padding: 1.5rem 2rem">Rank</th>
                                <th style="padding: 1.5rem 2rem">Candidate</th>
                                <th style="padding: 1.5rem 2rem">Assessment Hub</th>
                                <th style="padding: 1.5rem 2rem">Precision</th>
                                <th style="padding: 1.5rem 2rem">Execution Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.map((r, i) => `
                                <tr style="border-bottom: 1px solid var(--surface-border); transition: background 0.3s" onmouseover="this.style.background='rgba(255,255,255,0.01)'" onmouseout="this.style.background='transparent'">
                                    <td style="padding: 2rem">
                                        <span style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; background: ${i < 3 ? 'var(--primary-glow)' : 'var(--surface)'}; color: ${i < 3 ? 'var(--primary)' : 'var(--text-muted)'}; font-weight: 900; font-size: 0.8rem">
                                            ${i + 1}
                                        </span>
                                    </td>
                                    <td style="padding: 2rem">
                                        <div style="font-weight: 700">${r.user_name}</div>
                                        <div style="font-size: 0.75rem; opacity: 0.5">${r.email}</div>
                                    </td>
                                    <td style="padding: 2rem" class="text-muted">${r.exam_title}</td>
                                    <td style="padding: 2rem; color: var(--primary); font-weight: 800; font-size: 1.25rem">${r.score}%</td>
                                    <td style="padding: 2rem">
                                        <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.8rem; border-radius: 50px; background: var(--surface); font-size: 0.8rem; font-family: monospace">
                                            <i class="far fa-clock" style="opacity: 0.5"></i>
                                            ${formatDuration(r.time_taken || 0)}
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    notifications(data) {
        return `
             <div class="container animate-up">
                <h1>Signals Feed</h1>
                <div style="margin-top: 3rem">
                    ${data.map(n => `
                        <div class="glass-card" style="padding: 2rem; margin-bottom: 1rem">
                            <p>${n.message}</p>
                            <span style="font-size: 0.7rem; opacity: 0.5">${new Date(n.created_at).toLocaleString()}</span>
                        </div>
                    `).join('')}
                </div>
             </div>
        `;
    },

    studentPdfTemplate(attempt, audit, user) {
        return `
            <div id="pdf-export-container" style="padding: 60px; color: #1e293b; background: white; font-family: 'Inter', sans-serif; max-width: 1000px; margin: 0 auto">
                <header style="border-bottom: 3px solid #6366f1; padding-bottom: 20px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-end">
                    <div>
                        <h1 style="color: #6366f1; margin: 0; font-size: 32px">EliteQuiz <span style="font-weight: 300; color: #64748b">Transcript</span></h1>
                        <p style="margin: 5px 0; color: #64748b">Verified Performance Certification</p>
                    </div>
                    <div style="text-align: right">
                        <p style="margin: 0; font-weight: 700">${new Date().toLocaleDateString()}</p>
                        <p style="margin: 0; font-size: 12px; color: #94a3b8">Ref: ATTEMPT-${attempt.id || attempt.attempt_id}</p>
                    </div>
                </header>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px">
                    <div style="background: #f8fafc; padding: 25px; border-radius: 12px">
                        <h3 style="margin-top: 0; font-size: 14px; color: #6366f1; text-transform: uppercase; letter-spacing: 0.05em">Candidate Info</h3>
                        <p style="margin: 5px 0; font-size: 18px; font-weight: 700">${user.name}</p>
                        <p style="margin: 0; color: #64748b">${user.email}</p>
                    </div>
                    <div style="background: #f8fafc; padding: 25px; border-radius: 12px">
                        <h3 style="margin-top: 0; font-size: 14px; color: #6366f1; text-transform: uppercase; letter-spacing: 0.05em">Assessment Hub</h3>
                        <p style="margin: 5px 0; font-size: 18px; font-weight: 700">${attempt.exam_title}</p>
                        <p style="margin: 0; color: ${attempt.score >= (attempt.passing_score || 40) ? '#10b981' : '#ef4444'}; font-weight: 700">
                            SCORE: ${attempt.score}% (${attempt.score >= (attempt.passing_score || 40) ? 'CERTIFIED' : 'UNSUCCESSFUL'})
                        </p>
                    </div>
                </div>

                <h3 style="margin-bottom: 20px; font-size: 16px; border-left: 4px solid #6366f1; padding-left: 15px">Detailed Review Audit</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px">
                    <thead>
                        <tr style="background: #f1f5f9; text-align: left">
                            <th style="padding: 15px; border: 1px solid #e2e8f0; width: 50px">#</th>
                            <th style="padding: 15px; border: 1px solid #e2e8f0">Question Statement</th>
                            <th style="padding: 15px; border: 1px solid #e2e8f0; width: 120px">Your Answer</th>
                            <th style="padding: 15px; border: 1px solid #e2e8f0; width: 120px">Right Answer</th>
                            <th style="padding: 15px; border: 1px solid #e2e8f0; width: 80px">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${audit.map((q, i) => `
                            <tr>
                                <td style="padding: 15px; border: 1px solid #e2e8f0; vertical-align: top">${i + 1}</td>
                                <td style="padding: 15px; border: 1px solid #e2e8f0; vertical-align: top">
                                    <div style="font-weight: 600; margin-bottom: 5px">${q.question_text}</div>
                                    ${q.explanation ? `<div style="font-size: 11px; color: #64748b; font-style: italic">Exp: ${q.explanation}</div>` : ''}
                                </td>
                                <td style="padding: 15px; border: 1px solid #e2e8f0; vertical-align: top; color: ${q.status === 'Correct' ? '#10b981' : '#ef4444'}">${q.user_answer || 'N/A'}</td>
                                <td style="padding: 15px; border: 1px solid #e2e8f0; vertical-align: top; font-weight: 700; color: #6366f1">${q.correct_answer}</td>
                                <td style="padding: 15px; border: 1px solid #e2e8f0; vertical-align: top">
                                    <span style="display: inline-block; padding: 4px 8px; border-radius: 4px; background: ${q.status === 'Correct' ? '#dcfce7' : '#fee2e2'}; color: ${q.status === 'Correct' ? '#166534' : '#991b1b'}; font-weight: 700; font-size: 10px">
                                        ${q.status.toUpperCase()}
                                    </span>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>

                <footer style="margin-top: 60px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8">
                    This is an electronically generated report from EliteQuiz Assessment Engine. All marks are final.
                </footer>
            </div>
        `;
    }
};

window.Views = Views;
